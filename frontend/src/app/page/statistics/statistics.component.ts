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
  subscribers: Array<Subscriber> = [];
  subscriberCounter: number = 0;
  counter2019: string[] = [];
  counter2020: string[] = [];
  counter2021: string[] = [];


  // chart entities
  public chartType: string = 'bar';

  public chartDatasets2019: Array<any> = [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Number of new Subscribers in year: 2019'
    },
  ];

  public chartDatasets2020: Array<any> = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Number of new Subscribers in year: 2020' },
  ];

  public chartDatasets2021: Array<any> = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Number of new Subscribers in year: 2021' },
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        `rgba(255, 99, 132, 0.2)`,
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



  constructor(
    private subscriberService: SubscriberService,
  ) { this.subscriberCounterFunction(); }

  ngOnInit(): void {

  }

  subscriberCounterFunction(): void {

    const regex2019year = /^2019/;
    const regex2020year = /^2020/;
    const regex2021year = /^2021/;

    this.subscriber$.forEach((list) => {
      list.forEach((item) => {
        this.subscribers.push(item);
      })
    });

    for (const subscriber of this.subscribers) {
      this.subscriberCounter += 1;

      if ((subscriber.date.match(regex2019year) !== null)) {
        this.counter2019.push(subscriber.date);
      }
      if ((subscriber.date.match(regex2020year) !== null)) {
        this.counter2020.push(subscriber.date);
      }
      if ((subscriber.date.match(regex2021year) !== null)) {
        this.counter2021.push(subscriber.date);
      }

    }

  }

  displayCharts(): void {
    this.chartDatasets2019 = [
      {
        data: [
          this.counter2019.filter((item) => {
            return item.startsWith("2019-01") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-02") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-03") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-04") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-05") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-06") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-07") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-08") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-09") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-10") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-11") === true
          }).length,
          this.counter2019.filter((item) => {
            return item.startsWith("2019-12") === true
          }).length
        ], label: 'Number of new Subscribers in year: 2019'
      },
    ];


    this.chartDatasets2020 = [
      {
        data: [
          this.counter2020.filter((item) => {
            return item.startsWith("2020-01") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-02") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-03") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-04") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-05") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-06") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-07") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-08") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-09") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-10") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-11") === true
          }).length,
          this.counter2020.filter((item) => {
            return item.startsWith("2020-12") === true
          }).length
        ], label: 'Number of new Subscribers in year: 2020'
      },
    ];


    this.chartDatasets2021 = [
      {
        data: [
          this.counter2021.filter((item) => {
            return item.startsWith("2021-01") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-02") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-03") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-04") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-05") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-06") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-07") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-08") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-09") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-10") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-11") === true
          }).length,
          this.counter2021.filter((item) => {
            return item.startsWith("2021-12") === true
          }).length
        ], label: 'Number of new Subscribers in year: 2021'
      },
    ];

  }



}
