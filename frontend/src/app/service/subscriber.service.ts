import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from '../model/subscriber';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService extends BaseService<Subscriber>{

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'subscribers';
  }
  getAll(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
