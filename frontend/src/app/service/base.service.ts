import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Subscriber } from '../model/subscriber';
import { Certificate } from '../model/certificate';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T>{

  entity: string = '';

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.config.apiUrl}${this.entity}`);
  }

  get(_id: string): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}${this.entity}/${_id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.config.apiUrl}${this.entity}`, entity);
  }

  update(entity: Subscriber | Certificate): Observable<Subscriber | Certificate> {                // ide lehet kéne hagyni T -t de akkor az entity._id miatt sír.
    return this.http.patch<Subscriber | Certificate>(`${this.config.apiUrl}${this.entity}/${entity._id}`, entity);
    // patch, hogy nehogy felülírjuk a teljes objektumot, ha nem küldünk el minden adatot, hogy ne legyen adat vesztés
  }

  remove(_id: string): Observable<T> {
    return this.http.delete<T>(`${this.config.apiUrl}${this.entity}/${_id}`);
  }

}
