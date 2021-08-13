import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from '../model/archive';
import { Subscriber } from '../model/subscriber';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  entity = 'archive';
  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
  }

  getAll(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(`${this.config.apiUrl}${this.entity}`);
  }

  create(sub: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(`${this.config.apiUrl}${this.entity}`, sub);
  }

}
