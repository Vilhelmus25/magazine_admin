import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from '../model/subscriber';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService extends BaseService<Subscriber>{

  constructor(public http: HttpClient) {
    super(http);
    this.entity = 'subscribers';
  }
}
