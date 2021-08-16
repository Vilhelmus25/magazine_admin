import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from '../../model/certificate';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { SelectField } from 'src/app/areus-form/model/select-field';
import { CertificateService } from 'src/app/service/certificate.service';

@Component({
  selector: 'app-certificate-edit',
  templateUrl: './certificate-edit.component.html',
  styleUrls: ['./certificate-edit.component.scss']
})
export class CertificateEditComponent implements OnInit {

  certificate$: Observable<Certificate> = this.ar.params.pipe(
    switchMap(params =>
      this.certificateService.get(params.id))         // ez az id az url végén levő id, nem a modellé!
  )
  certificate: Certificate = new Certificate();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private certificateService: CertificateService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.certificate$.subscribe(
      certificate => {                                 // amikor megjön az ügyfél
        this.certificate = certificate;                 // meg kell várnom amíg megjön az ügyfél

        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {

    this.fields = [
      new InputField({ key: '_id', label: '', type: 'hidden', value: this.certificate._id }),
      new InputField({
        key: 'name', label: 'Name', type: 'text', value: this.certificate.name,
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Name is required and it must be from 5 to 70 characters long.'
      }),
      new InputField({
        key: 'taxNumber', label: 'TaxNumber', type: 'text', value: this.certificate.taxNumber,
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/\d{10}/)], errorMessage: 'TaxNumber is required and must be 10 character only digits.'
      }),
      new InputField({
        key: 'headquarters', label: 'Headquarters', type: 'text', value: (this.certificate.headquarters),
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/./)], errorMessage: 'Headquarters is required and it must be from 5 to 40 characters long.'
      }),
      new SelectField({
        key: 'date', label: 'Date', type: '', value: this.certificate.date, controlType: 'select', options: [{ value: `${this.certificate.date}`, label: `${this.certificate.date}` }]
      }),
      new InputField({
        key: 'legalReference', label: 'LegalReference', type: 'text', value: (this.certificate.legalReference),
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(1000), Validators.pattern(/./)], errorMessage: 'LegalReference is required and it must be from 5 to 1000 characters long.'
      }),
      new InputField({
        key: 'director', label: 'Director', type: 'text', value: (this.certificate.director),
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern(/./)], errorMessage: 'Director is required and it must be from 5 to 70 characters long.'
      }),
    ];
  }

  onSave(certificate: Certificate): void {
    this.certificateService.update(certificate).subscribe(
      certificate => this.router.navigate(['/'])
    )
  }

}
