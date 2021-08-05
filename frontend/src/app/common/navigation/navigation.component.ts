import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user$: BehaviorSubject<User | null> = this.auth.currentUserSubject$;

  constructor(
    private auth: AuthService,          // szeretnénk figyelni a service-ben lévő currentSubscriberSubject-et, hogy éppen milyen érték van-e benne, null vagy subscriber és az alapján kitenni a subscriber
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.auth.logout();
  }
}
