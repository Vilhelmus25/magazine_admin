import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from 'src/app/model/archive';
import { ArchiveService } from 'src/app/service/archive.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.archiveColumns;
  list$: Observable<Archive[]> = this.archiveService.getAll();

  constructor(
    private config: ConfigService,
    private archiveService: ArchiveService,
  ) { }

  ngOnInit(): void {
  }

}
