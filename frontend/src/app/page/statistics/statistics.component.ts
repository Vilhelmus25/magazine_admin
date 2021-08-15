import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'src/app/model/subscriber';
import { SubscriberService } from 'src/app/service/subscriber.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  subscriber$: Observable<Subscriber[]> = this.subscriberService.getAll();
  showForm: boolean = false;
  subscriber: Subscriber = new Subscriber();

  constructor(
    private subscriberService: SubscriberService,
  ) { }

  ngOnInit(): void {
  }

  public chartType: string = 'bar';

  public chartDatasets2021: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56], label: 'Number of new Subscribers 2021' },
  ];

  public chartDatasets2020: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56], label: 'Number of new Subscribers 2020' },
  ];
  public chartDatasets2019: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 48, 65, 59, 80, 81, 56], label: 'Number of new Subscribers 2019' },
  ];
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
