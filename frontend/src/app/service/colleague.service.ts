import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colleague } from '../model/colleague';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService extends BaseService<Colleague>{

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'colleague';
  }
}
