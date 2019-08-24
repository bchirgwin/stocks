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

//  http://www.nasdaq.com/screening/companies-by-industry.aspx?exchange=NASDAQ&render=download
//  http://www.nasdaq.com/screening/companies-by-industry.aspx?exchange=NYSE&render=download
//  http://www.asx.com.au/asx/research/ASXListedCompanies.csv
}
