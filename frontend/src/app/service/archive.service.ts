import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Archive } from '../model/archive';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService extends BaseService<Archive> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'archive';
  }

}
