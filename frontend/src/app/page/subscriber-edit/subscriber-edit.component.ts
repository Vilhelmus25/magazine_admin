import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Subscriber } from 'src/app/model/subscriber';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-subscriber-edit',
  templateUrl: './subscriber-edit.component.html',
  styleUrls: ['./subscriber-edit.component.scss']
})
export class SubscriberEditComponent implements OnInit {

  subscriber$: Observable<Subscriber> = this.ar.params.pipe(
    switchMap(params =>
      this.subscriberService.get(params.id))         // ez az id az url végén levő id, nem a modellé!
  )
  subscriber: Subscriber = new Subscriber();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private subscriberService: SubscriberService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscriber$.subscribe(
      subscriber => {   // amikor megjön az ügyfél
        this.subscriber = subscriber;                 // meg kell várnom amíg megjön az ügyfél
        this.setForm();
        this.showForm = true;
      }
    )
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

    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.subscriber._id }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.subscriber.name,
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required.'
      }),
      new InputField({
        key: 'postalCode', label: 'PostalCode', type: 'number', value: (this.subscriber.postalCode as unknown as string),
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[1-9]\d{3}$/)], errorMessage: 'PostalCode is required must be 4 character and cannot start with 0.'
      }),
      new InputField({
        key: 'city', label: 'City', type: 'text', value: (this.subscriber.city),
        validators: [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'City is required.'
      }),
      new InputField({ key: 'address', label: 'Address', type: 'text', value: (this.subscriber.address) }),
      new InputField({ key: 'licence_id', label: 'Licence_Id', type: 'number', value: (this.subscriber.licence_id as unknown as string) }),
      new InputField({ key: 'licnced_seasons', label: 'Licnced_Seasons', type: 'number', value: (this.subscriber.licenced_seasons as unknown as string) }),
      new InputField({ key: 'seasons_left', label: 'Seasons_Left', type: 'number', value: (this.subscriber.seasons_left as unknown as string) }),
      new InputField({ key: 'amount', label: 'Amount', type: 'number', value: (this.subscriber.amount as unknown as string) }),
      new InputField({ key: 'colleague', label: 'Colleague', type: 'text', value: (this.subscriber.colleague) })
    ];
  }

  onSave(subscriber: Subscriber): void {
    this.subscriberService.update(subscriber).subscribe(
      subscriber => this.router.navigate(['/', 'subscribers'])
    )
  }


}
