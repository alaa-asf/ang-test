import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEquityService {
  url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=3OUVTRKGUMOX2L34"
  urlFromUsd="https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=EUR&apikey=3OUVTRKGUMOX2L34"
  urlFromEur="https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey=3OUVTRKGUMOX2L34"
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }

  fromUsd(){
    return this.http.get(this.urlFromUsd);
  }

  fromEur(){
    return this.http.get(this.urlFromEur);
  }
}
