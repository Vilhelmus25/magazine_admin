import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Colleague } from 'src/app/model/colleague';
import { ColleagueService } from 'src/app/service/colleague.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.colleagueColumns;
  list$: Observable<Colleague[]> = this.colleagueService.getAll();

  constructor(
    private config: ConfigService,
    private colleagueService: ColleagueService,
    private router: Router,

  ) { }

  ngOnInit(): void { }

  onSelectOne(colleague: Colleague): void {
    this.router.navigate(['colleague/edit/', colleague._id]);
    this.list$ = this.colleagueService.getAll();
  }

  onDeleteOne(colleague: Colleague): void {

    this.colleagueService.remove(colleague._id).subscribe(() => {
      this.list$ = this.colleagueService.getAll();
    });
  }

}
