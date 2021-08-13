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
import { CertificateComponent } from './page/certificate/certificate.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { LoginComponent } from './page/login/login.component';
import { SubscriberEditComponent } from './page/subscriber-edit/subscriber-edit.component';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    HomeComponent,
    SubscribersComponent,
    ArchiveComponent,
    StatisticsComponent,
    CertificateComponent,
    DataTableComponent,
    LoginComponent,
    SubscriberEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
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
