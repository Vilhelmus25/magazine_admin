import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T extends { [propname: string]: any }> implements OnInit {  // a T egy ismeretlen típus, amit kibővítek egy olyan objektummal, ahol a property neve az lehet string, vagyis, kulcsként is adhatok meg stringet, ez a html részben látszik és oda kell

  //tableColumns: ITableColumn[] = this.config.subscriberColumns;   // ez azért nem jó, mert nem csak előfizetői táblánk lesz
  @Input() tableColumns: ITableColumn[] = [];   // általánosítunk, Inputtal
  @Input() list$: Observable<T[]> | null = null;    // azért vagy null, mert az async kezeli a nullt, ha meg kap adatot, akkor bódogság is van.

  @Output() selectOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() deleteOne: EventEmitter<T> = new EventEmitter<T>();
  @Output() printCertificate: EventEmitter<T> = new EventEmitter<T>();

  constructor(
    private config: ConfigService,
  ) { }


  ngOnInit(): void {
  }

  onSelect(entity: T): void {
    this.selectOne.emit(entity);
  }
  onDelete(entity: T): void {
    this.deleteOne.emit(entity);
  }
  onPrintCertificate(entity: T): void {
    this.printCertificate.emit(entity);
  }

}
