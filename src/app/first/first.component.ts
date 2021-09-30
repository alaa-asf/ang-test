import { GetEquityService } from './../get-equity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  data: any;
  apiData: any;
  multiAxisOptions: any;
  allData: any = [];
  constructor(private service: GetEquityService) {
    this.allData = [];
  }
  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      let times = Object.entries(res['Time Series (5min)']);
      let metaData = Object.entries(res['Meta Data']);
      let labels = [];
      let openData: any = [];
      let openData2: any = [];
      let highData = [];
      let lowData = [];
      for (let i = 0; i <= metaData.length; i++) {
        this.allData = metaData;
      }
      for (let time of times) {
        labels.push(
          new Date(time[0]).toLocaleString('default', {
            hour: '2-digit',
            minute: '2-digit',
          })
        );

        openData.push(time[1]);
      }

      for (let x of openData) {
        openData2.push(x['1. open']);
        highData.push(x['2. high']);
        lowData.push(x['3. low']);
      }
      this.data = {
        labels: labels,
        datasets: [
          {
            label: 'open',
            data: openData2,
            fill: false,
            borderColor: '#DC143C',
          },
          {
            label: 'high',
            data: highData,
            fill: false,
            borderColor: '#42A5F5',
          },
          {
            label: 'low',
            data: lowData,
            fill: false,
            borderColor: '#FF8C00',
          },
        ],
      };

      this.multiAxisOptions = {
        stacked: false,
        plugins: {
          legend: {
            labels: {
              color: '#495057',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: '#DC143C',
            },
            grid: {
              color: '#ebedef',
            },
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            ticks: {
              color: '#42A5F5',
            },

            grid: {
              color: '#ebedef',
            },
          },
          y3: {
            type: 'linear',
            display: true,
            position: 'right',
            ticks: {
              color: '#FF8C00',
            },

            grid: {
              color: '#ebedef',
            },
          },
        },
      };
    });
  }
}
