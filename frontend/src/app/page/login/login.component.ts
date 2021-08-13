import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'src/app/model/subscriber';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { SubscriberService } from 'src/app/service/subscriber.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onLogin(): void {
    this.auth.login(this.user).subscribe(
      user => {
        if (user) {
          this.router.navigate(['/']);        // a főoldalra navigál, ha van user
        }
        // error handling here:

      }
    )
  }

  setPassword(): void {
    this.userService.update({ _id: 'oiuzapijsjisuitpoer523412671', password: 'test' }).subscribe(
      resp => console.log(resp)
    );
  }

}
