import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from '../model/certificate';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  entity = 'certificate';

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) { }

  getAll(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${this.config.apiUrl}${this.entity}`);
  }

  get(_id: string): Observable<Certificate> {
    return this.http.get<Certificate>(`${this.config.apiUrl}${this.entity}/${_id}`);
  }
  update(entity: Certificate): Observable<Certificate> {
    return this.http.patch<Certificate>(`${this.config.apiUrl}${this.entity}/${entity._id}`, entity);

  }
}
