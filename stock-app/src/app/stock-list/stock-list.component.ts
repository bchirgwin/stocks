import {Component, OnInit} from '@angular/core';
import {StocksService} from "../stocks.service";
import {combineLatest, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {debounceTime, map} from "rxjs/operators";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks$: Observable<any>;
  filter: FormControl;
  filter$: Observable<string>;
  filteredStocks$: Observable<any>;

  constructor(private stocksService: StocksService) {
    this.stocks$ = this.stocksService.getStocks();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(debounceTime(200));
    this.filter.setValue('', {emitEvent: true});
  }

  ngOnInit() {
    this.filteredStocks$ = combineLatest(this.stocks$, this.filter$)
      .pipe(
        map(([stocks, filterString]) => {
          return stocks.filter(stock => stock.symbol.toLowerCase().includes(filterString.toLowerCase())
            || stock.name.toLowerCase().includes(filterString.toLowerCase())
          )
        }));
  }

}
