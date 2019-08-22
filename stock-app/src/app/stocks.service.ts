import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {stocks} from './stocks'
@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor() { }

  getStocks() {
    return of(stocks);
  }

}
