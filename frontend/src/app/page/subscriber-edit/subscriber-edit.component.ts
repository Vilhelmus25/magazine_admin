import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

  constructor(
    private subscriberService: SubscriberService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
