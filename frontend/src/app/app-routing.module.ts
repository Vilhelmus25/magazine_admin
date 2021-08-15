import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './page/archive/archive.component';
import { CertificateComponent } from './page/certificate/certificate.component';
import { ColleagueCreateComponent } from './page/colleague-create/colleague-create.component';
import { ColleagueEditComponent } from './page/colleague-edit/colleague-edit.component';
import { ColleagueComponent } from './page/colleague/colleague.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { StatisticsComponent } from './page/statistics/statistics.component';
import { SubscriberCreateComponent } from './page/subscriber-create/subscriber-create.component';
import { SubscriberEditComponent } from './page/subscriber-edit/subscriber-edit.component';
import { SubscribersComponent } from './page/subscribers/subscribers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'subscribers',
    component: SubscribersComponent,
  },
  {
    path: 'subscribers/create',
    component: SubscriberCreateComponent,
  },
  {
    path: 'subscribers/edit/:id',
    component: SubscriberEditComponent,
  },
  {
    path: 'archive',
    component: ArchiveComponent,
  },
  {
    path: 'certificate',
    component: CertificateComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'colleague',
    component: ColleagueComponent,
  },
  {
    path: 'colleague/create',
    component: ColleagueCreateComponent,
  },
  {
    path: 'colleague/edit/:id',
    component: ColleagueEditComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
