import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscriber } from 'src/app/model/subscriber';
import { ArchiveService } from 'src/app/service/archive.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.subscriberColumns;
  list$: Observable<Subscriber[]> = this.subscriberService.getAll();

  constructor(
    private config: ConfigService,
    private subscriberService: SubscriberService,
    private archiveService: ArchiveService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(subscriber: Subscriber): void {
    this.router.navigate(['subscribers/edit/', subscriber._id]);
    this.list$ = this.subscriberService.getAll();
  }

  onDeleteOne(subscriber: Subscriber): void {

    this.subscriberService.remove(subscriber._id).subscribe(() => {
      this.list$ = this.subscriberService.getAll();
    });
  }

  toArchive(): void {
    this.list$.forEach((list) => {
      list.forEach((item, index) => {
        item.seasons_left -= 1;                                  // minden évszakot 1-el csökkentünk
        this.subscriberService.update(item).subscribe(() => {    // frissítjük a változást
          console.log(`Update successful`);
        })
        if (item.seasons_left === 0) {                           // ami 0 lett  
          this.archiveService.create(item).subscribe(() => {     // átvisszük a változást az archívumba, darabonként
            console.log(`Create successful`);
          });              // azt lementjük
          this.subscriberService.remove(item._id).subscribe(() => {
            console.log("Remove successful");                   // és töröljük a listából amit átvittünk
          });
        }
      });
    });

    this.list$ = this.subscriberService.getAll();               // "frissítünk"

  }

  onPrintCertificate(subscriber: Subscriber): void {
    this.router.navigate(['certificate/', subscriber]);
  }

}
