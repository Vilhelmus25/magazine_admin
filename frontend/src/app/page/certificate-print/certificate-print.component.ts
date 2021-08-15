import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from '../../model/certificate';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Subscriber } from 'src/app/model/subscriber';
import { CertificateService } from 'src/app/service/certificate.service';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-certificate-print',
  templateUrl: './certificate-print.component.html',
  styleUrls: ['./certificate-print.component.scss']
})
export class CertificatePrintComponent implements OnInit {

  subscriber$: Observable<Subscriber> = this.ar.params.pipe(
    switchMap(params =>
      this.subscriberService.get(params.id))         // ez az id az url végén levő id, nem a modellé!
  );

  certificate$: Observable<Certificate[]> = this.certificateService.getAll();
  showForm: boolean = false;
  subscriber: Subscriber = new Subscriber();

  constructor(
    private ar: ActivatedRoute,
    private subscriberService: SubscriberService,
    private certificateService: CertificateService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subscriber$.subscribe(
        subscriber => {
          this.subscriber = subscriber;
          this.showForm = true;
        }
      );
    }, 100);
  }

  printPage() {
    window.print();
  }

}
