import { GetEquityService } from './../get-equity.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  fromUsdEl: any = 1;
  toEur: any;
  exchangeRate: any;
  bidPrice: any;
  askPrice: any;
  exchangeRate2: any;
  bidPrice2: any;
  askPrice2: any;
  constructor(private service: GetEquityService) {}

  ngOnInit(): void {
    this.service.fromUsd().subscribe(
      (res: any) => {
        if (res.hasOwnProperty('Note')) {
          alert(res['Note']);
        } else {
          let fromUsd = Object.entries(res['Realtime Currency Exchange Rate']);
          this.exchangeRate = fromUsd[4][1];
          this.bidPrice = fromUsd[7][1];
          this.askPrice = fromUsd[8][1];
          this.toEur = this.exchangeRate;
        }
      },
      (err) => {
        alert('try after 5 min please');
      }
    );

    this.service.fromEur().subscribe(
      (res: any) => {
        if (res.hasOwnProperty('Note')) {
          alert(res['Note']);
        } else {
          let fromEur = Object.entries(res['Realtime Currency Exchange Rate']);
          this.exchangeRate2 = fromEur[4][1];
          this.bidPrice2 = fromEur[7][1];
          this.askPrice2 = fromEur[8][1];
        }
      },
      (err) => {
        alert('try after 5 min please');
      }
    );
  }

  convert() {
    console.log(this.fromUsdEl);
    if (this.fromUsdEl === null) this.toEur = '';
    else this.toEur = this.fromUsdEl * this.exchangeRate;
  }
  convert2() {
    if (this.toEur === null) this.fromUsdEl = '';
    else this.fromUsdEl = this.toEur / this.exchangeRate;
  }
}
