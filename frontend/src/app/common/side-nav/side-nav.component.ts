import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subscriber } from 'src/app/model/subscriber';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  subscriber$: BehaviorSubject<Subscriber | null> = this.auth.currentSubscriberSubject$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
