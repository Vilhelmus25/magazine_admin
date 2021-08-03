import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subscriber } from '../model/subscriber';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // értesíteni kell az alkalmazás használóit, hogy be van-e lépve vagy nem
  currentSubscriberSubject$: BehaviorSubject<Subscriber | null> =     // ha be van lépve akkor User, ha nincs akkor null-t kapunk vissza
    new BehaviorSubject<Subscriber | null>(null);     // kezdésre null, mert alapból nincs senki belépve
  lastToken: string = '';       // az utolsó tárolt token
  loginUrl: string = `${this.config.apiUrl}login`;                  // erre küldi a postot a bejelentkezési címre


  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router,
  ) {
    if (localStorage.currentSubscriber) {
      const subscriber: Subscriber = JSON.parse(localStorage.currentSubscriber);    // van-e belépett felhasználóm a localStorage-ban, így vissza tudom tölteni
      this.lastToken = subscriber.accessToken || '';
      this.currentSubscriberSubject$.next(subscriber);
    }
  }

  login(loginData: Subscriber): Observable<Subscriber | null> {
    return this.http.post<{ subscriber: Subscriber, accessToken: string }>(       // postolunk mert be akarunk jelentkezni, az accesstokent és a usert küld vissza a szerver
      this.loginUrl,   // hova
      loginData       // mit
    ).pipe(           // ez a pipe, azért kell, mert a login típusa, nem egyezik a post típusával
      map(response => {     // mindez ha sikerült belépni
        if (response.subscriber && response.accessToken) {
          this.lastToken = response.accessToken;
          response.subscriber.accessToken = response.accessToken;
          this.currentSubscriberSubject$.next(response.subscriber);   // a feliratkozóknak terítem, tehát akik figyelik az auth service-emet, kapnak értesítést róla, hogy változott currentSubscriberSubject értéke
          localStorage.currentSubcriber = JSON.stringify(response.subscriber);        // a böngésző localeStorage-éba taárolom, a user adatait. Ha frissítem a böngészőt, akkor meg tudom előbb nézni a localeStorage-t és nem kell újra lekérdezni, viszont, ezt majd egyszer törölni is kell.
          return response.subscriber;   // Subscribert ad vissza
        }
        return null;      // ha nem akkor null-t
      })           // feliratkozik ennek a postnak a kimenetére, egy ilyet fog kapni, (subscriber és access token) és visszaad valami más adatot, vagyis pont a <Subscriber | null> típust
    );
  }

  logout(): void {
    this.lastToken = '';                              // mindent nullázunk
    this.currentSubscriberSubject$.next(null);
    localStorage.removeItem('currentSubscriber');
    this.router.navigate(['/', 'login']);             // visszairányít a login oldalra
  }

}
