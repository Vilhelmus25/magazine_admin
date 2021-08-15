import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Certificate } from 'src/app/model/certificate';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { CertificateService } from 'src/app/service/certificate.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  user$: BehaviorSubject<User | null> = this.auth.currentUserSubject$;

  certificateList$: Observable<Certificate[]> = this.certificateService.getAll();

  certificateID: string = "";


  constructor(
    private auth: AuthService,
    private certificateService: CertificateService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
