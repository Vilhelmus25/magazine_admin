import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './page/archive/archive.component';
import { CertificateComponent } from './page/certificate/certificate.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { StatisticsComponent } from './page/statistics/statistics.component';
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
