import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from './model/subscriber';
import { SubscriberService } from './service/subscriber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  subscribers: Observable<Subscriber[]> = this.subscriberService.getAll();

  constructor(
    private subscriberService: SubscriberService
  ) { }
}
