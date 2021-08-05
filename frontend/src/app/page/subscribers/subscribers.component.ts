import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscriber } from 'src/app/model/subscriber';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.subscriberColumns;
  list$: Observable<Subscriber[]> = this.subscriberService.getAll();

  constructor(
    private config: ConfigService,
    private subscriberService: SubscriberService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(subscriber: Subscriber): void {
    this.router.navigate(['subscribers/edit/', subscriber._id]);
  }

}
