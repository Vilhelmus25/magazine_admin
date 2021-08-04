import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'src/app/model/subscriber';
import { AuthService } from 'src/app/service/auth.service';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  subscriber: Subscriber = new Subscriber();

  constructor(
    private subscriberService: SubscriberService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onLogin(): void {
    this.auth.login(this.subscriber).subscribe(
      subscriberResponse => {
        if (subscriberResponse) {
          this.router.navigate(['/']);        // a főoldalra navigál, ha van subscriber
        }
        // error handling here:

      }
    )
  }


  setPassword(): void {
    this.subscriberService.update({ _id: 'kgasiodfwepfjpGIOHoijef', password: 'test' }).subscribe(
      resp => console.log(resp)
    );
  }

}
