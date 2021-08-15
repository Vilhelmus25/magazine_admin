import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { SelectField } from 'src/app/areus-form/model/select-field';
import { Colleague } from 'src/app/model/colleague';
import { ColleagueService } from 'src/app/service/colleague.service';

@Component({
  selector: 'app-colleague-edit',
  templateUrl: './colleague-edit.component.html',
  styleUrls: ['./colleague-edit.component.scss']
})
export class ColleagueEditComponent implements OnInit {

  colleague$: Observable<Colleague> = this.ar.params.pipe(
    switchMap(params =>
      this.colleagueService.get(params.id))         // ez az id az url végén levő id, nem a modellé!
  )
  colleague: Colleague = new Colleague();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private colleagueService: ColleagueService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.colleague$.subscribe(
      colleague => {                                 // amikor megjön az ügyfél
        this.colleague = colleague;                 // meg kell várnom amíg megjön az ügyfél
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.colleague._id }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.colleague.name,
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required and it must be from 5 to 70 characters long.'
      }),
      new InputField({
        key: 'birth_date', label: 'BirthDate', type: 'text', value: (this.colleague.birth_date),
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/)], errorMessage: 'BirthDate is required and it must follow the yyyy-mm-dd form in digits.'
      }),
      new InputField({
        key: 'postalCode', label: 'PostalCode', type: 'number', value: (this.colleague.postalCode as unknown as string),
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[1-9]\d{3}$/)], errorMessage: 'PostalCode is required must be 4 character and cannot start with 0.'
      }),
      new InputField({
        key: 'city', label: 'City', type: 'text', value: (this.colleague.city),
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Ű]{1}.\D*$/)], errorMessage: 'City is required, it must be from 3 to 30 characters long and must not contain digits.'
      }),
      new InputField({
        key: 'address', label: 'Address', type: 'text', value: (this.colleague.address),
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/./)], errorMessage: 'Address is required and it must be from 5 to 40 characters long.'
      }),
      new InputField({
        key: 'salary', label: 'Salary', type: 'text', value: (this.colleague.salary),
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/\d{3}[$/month$]/)], errorMessage: 'Salary is required and it must be like ###$/month , where # are digits!'
      }),
    ];
  }

  onSave(colleague: Colleague): void {
    this.colleagueService.update(colleague).subscribe(
      colleague => this.router.navigate(['/', 'colleague'])
    )
  }
}
