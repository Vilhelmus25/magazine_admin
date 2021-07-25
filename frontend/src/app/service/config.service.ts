import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  subscriberColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    { key: "name", title: "Name" },
    { key: "postalCode", title: "PostalCode" },
    { key: "city", title: "City" },
    { key: "address", title: "Address" },
    { key: "licence_id", title: "LicenceID" },
    { key: "licenced_seasons", title: "LicencedSeasons" },
    { key: "seasons_left", title: "SeasonsLeft" },
    { key: "amount", title: "Amount" },
    { key: "colleague", title: "Colleague" },
  ];

  archiveColumns: ITableColumn[] = [
    { key: "_id", title: "#" },
    { key: "name", title: "Name" },
    { key: "postalCode", title: "PostalCode" },
    { key: "city", title: "City" },
    { key: "address", title: "Address" },
    { key: "licence_id", title: "LicenceID" },
    { key: "licenced_seasons", title: "LicencedSeasons" },
    { key: "amount", title: "Amount" },
    { key: "colleague", title: "Colleague" },
  ];

  constructor() { }
}
