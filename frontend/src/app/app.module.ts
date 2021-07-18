import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http/';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { HomeComponent } from './page/home/home.component';
import { SubscribersComponent } from './page/subscribers/subscribers.component';
import { ArchiveComponent } from './page/archive/archive.component';
import { StatisticsComponent } from './page/statistics/statistics.component';
import { CertificateComponent } from './page/certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    HomeComponent,
    SubscribersComponent,
    ArchiveComponent,
    StatisticsComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
