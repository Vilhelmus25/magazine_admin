import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { SelectField } from 'src/app/areus-form/model/select-field';
import { Colleague } from 'src/app/model/colleague';
import { Subscriber } from 'src/app/model/subscriber';
import { ColleagueService } from 'src/app/service/colleague.service';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-subscriber-create',
  templateUrl: './subscriber-create.component.html',
  styleUrls: ['./subscriber-create.component.scss']
})
export class SubscriberCreateComponent implements OnInit {
  subscriber$: Observable<Subscriber> = this.ar.params.pipe(
    switchMap(params =>
      this.subscriberService.get(params.id))         // ez az id az url végén levő id, nem a modellé!
  )
  subscriber: Subscriber = new Subscriber();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;
  colleagueNames$: Observable<Colleague[]> = this.colleagueService.getAll();
  colleagueNames: Colleague[] = [];
  options: { value: string, label: string }[] = [];

  constructor(
    private subscriberService: SubscriberService,
    private colleagueService: ColleagueService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.collectColleagueNames();
    setTimeout(() => {
      this.subscriber = new Subscriber();
      this.setForm();
      this.showForm = true;
    }, 200);
  }

  setForm(): void {
    /*
        name?: string = "";
        postalCode?: number = 0;
        city?: string = "";
        address?: string = "";
        licence_id?: number = 0;
        licenced_seasons?: number = 0;
        seasons_left?: number = 0;
        amount?: number = 0;
        colleague?: string = "";
        */
    for (const item of this.colleagueNames) {
      this.options.push({ value: `${item.name}`, label: `${item.name}` })
    }

    this.fields = [
      // nem köll id, mert megsértődik
      new SelectField({
        key: 'date', label: 'Date', type: '', value: this.subscriber.date, controlType: 'select', options: [{ value: `${this.subscriber.date}`, label: `${this.subscriber.date}` }]
      }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.subscriber.name,
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required and it must be from 5 to 70 characters long.'
      }),
      new InputField({
        key: 'postalCode', label: 'PostalCode', type: 'number', value: (this.subscriber.postalCode as unknown as string),
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[1-9]\d{3}$/)], errorMessage: 'PostalCode is required must be 4 character and cannot start with 0.'
      }),
      new InputField({
        key: 'city', label: 'City', type: 'text', value: (this.subscriber.city),
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Ű]{1}.\D*$/)], errorMessage: 'City is required, it must be from 3 to 30 characters long and must not contain digits.'
      }),
      new InputField({
        key: 'address', label: 'Address', type: 'text', value: (this.subscriber.address),
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/./)], errorMessage: 'Address is required and it must be from 5 to 40 characters long.'
      }),
      new InputField({
        key: 'licence_id', label: 'Licence_Id', type: 'text', value: (this.subscriber.licence_id),
        validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/\d{2}-\d{3}-\d{4}/)], errorMessage: 'Licence_Id is required and it must follow the ##-###-#### form (where # is a digit).'
      }),
      new InputField({
        key: 'licenced_seasons', label: 'Licenced_Seasons', type: 'number', value: (this.subscriber.licenced_seasons as unknown as string),
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern(/^[1-9][0-9]*$/)], errorMessage: 'Licenced_Seaesons is required and it must be between 1-99!'
      }),
      new InputField({
        key: 'amount', label: 'Amount', type: 'number', value: (this.subscriber.amount as unknown as string),
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(/^[1-9][0-9]*$/)], errorMessage: 'Amount is required and it must be between 1-999!'
      }),
      new SelectField({
        key: 'colleague', label: 'Colleague', type: '', value: '', controlType: 'select', options: [
          ...this.options
        ]
      }),
    ];
  }

  onSave(subscriber: Subscriber): void {
    subscriber.seasons_left = subscriber.licenced_seasons;            // mert új felhasználóról van szó, ezért még annyi lesz hátra, amennyit felveszünk nekije
    this.subscriberService.create(subscriber).subscribe(
      subscriber => this.router.navigate(['/', 'subscribers'])
    )
  }


  collectColleagueNames(): Colleague[] {
    this.colleagueNames$.subscribe(itemList => {
      for (const index of itemList) {
        this.colleagueNames.push(index)
      }
    });
    return this.colleagueNames;
  }

}
