import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://127.0.0.1:3000/';

  subscriberColumns: ITableColumn[] = [
    // { key: "_id", title: "#" },
    { key: "date", title: "Date" },
    { key: "name", title: "Name" },
    { key: "postalCode", title: "PostalCode" },
    { key: "city", title: "City" },
    { key: "address", title: "Address" },
    { key: "licence_id", title: "LicenceID" },
    { key: "licenced_seasons", title: "LicencedSeasons" },
    { key: "seasons_left", title: "SeasonsLeft" },
    { key: "amount", title: "Amount", outputTransform: (v: string) => `${v} pcs` },
    { key: "colleague", title: "Colleague" },
  ];

  archiveColumns: ITableColumn[] = [
    // { key: "_id", title: "#" },
    { key: "date", title: "Date" },
    { key: "name", title: "Name" },
    { key: "postalCode", title: "PostalCode" },
    { key: "city", title: "City" },
    { key: "address", title: "Address" },
    { key: "licence_id", title: "LicenceID" },
    { key: "licenced_seasons", title: "LicencedSeasons" },
    { key: "amount", title: "Amount", outputTransform: (v: string) => `${v} pcs` },
    { key: "colleague", title: "Colleague" },
  ];

  constructor() { }

  //static
}
