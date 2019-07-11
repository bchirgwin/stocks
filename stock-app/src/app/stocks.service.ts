import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  stocks = [
    {
      symbol: 'F',
      name: 'Ford'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc'
    },
    {
      symbol: 'GM',
      name: 'General Motors Company'
    }
  ];

  constructor() { }

  getStocks() {
    return of(this.stocks);
  }

}
