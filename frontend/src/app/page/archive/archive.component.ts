import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Archive } from 'src/app/model/archive';
import { Subscriber } from 'src/app/model/subscriber';
import { ArchiveService } from 'src/app/service/archive.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.archiveColumns;
  list$: Observable<Subscriber[]> = this.archiveService.getAll();

  constructor(
    private config: ConfigService,
    private archiveService: ArchiveService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDeleteOne(subscriber: Subscriber): void {
    this.archiveService.remove(subscriber._id).subscribe(() => {
      this.list$ = this.archiveService.getAll();
    });
  }

}
