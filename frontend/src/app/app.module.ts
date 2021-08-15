import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http/';
import { FormsModule } from '@angular/forms';

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { HomeComponent } from './page/home/home.component';
import { SubscribersComponent } from './page/subscribers/subscribers.component';
import { ArchiveComponent } from './page/archive/archive.component';
import { StatisticsComponent } from './page/statistics/statistics.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { LoginComponent } from './page/login/login.component';
import { SubscriberEditComponent } from './page/subscriber-edit/subscriber-edit.component';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';
import { SubscriberCreateComponent } from './page/subscriber-create/subscriber-create.component';
import { ColleagueComponent } from './page/colleague/colleague.component';
import { ColleagueCreateComponent } from './page/colleague-create/colleague-create.component';
import { ColleagueEditComponent } from './page/colleague-edit/colleague-edit.component';
import { CertificateEditComponent } from './page/certificate-edit/certificate-edit.component';
import { CertificatePrintComponent } from './page/certificate-print/certificate-print.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    HomeComponent,
    SubscribersComponent,
    ArchiveComponent,
    StatisticsComponent,
    DataTableComponent,
    LoginComponent,
    SubscriberEditComponent,
    SubscriberCreateComponent,
    ColleagueComponent,
    ColleagueCreateComponent,
    ColleagueEditComponent,
    CertificateEditComponent,
    CertificatePrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
