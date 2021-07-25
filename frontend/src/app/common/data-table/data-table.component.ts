import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private config: ConfigService,
  ) { }


  ngOnInit(): void {
  }

}
