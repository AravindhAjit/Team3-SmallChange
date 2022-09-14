import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/service/mock-data.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Trade } from 'src/app/models/trade';

export interface TradeData {
  instrumentId : number ,
  timestamp: string,
  direction: string,
  bidprice: number,
  quantity: number,
  category: string
}

/** Constants used to fill up our data base. */
const direction: string[] = [
  'buy',
  'sell',
];


@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})

export class TradeHistoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['instrumentId', 'timestamp', 'direction', 'bidprice','quantity','category'];
  dataSource: MatTableDataSource<TradeData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 trades
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): TradeData {
  // const name =
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
  //   ' ' +
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
  //   '.';
  const cat = "CID" + Math.round(Math.random() * 10).toString();
  const ins = Math.floor(Math.random() * 100) + 100;
  const ts = "2022" + Math.round(Math.random() * 28).toString() + Math.round(Math.random() * 12).toString() + "T" + Math.round(Math.random() * 24).toString() + Math.round(Math.random() * 60).toString() + Math.round(Math.random() * 60).toString() + "UTC";
  const d = direction[Math.round(Math.random() * 1)];
  const bp = Math.floor(Math.random() * 1000) + 3500 ;
  const qua = Math.round(Math.random() * 20);
  return {
    instrumentId : ins ,
    timestamp: ts ,
    direction: d,
    bidprice: bp,
    quantity: qua,
    category: cat
  };
}


  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  // dataSource: MatTableDataSource<Trade>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // Portfoliodata : any;
  // constructor(private dataService : MockDataService) { 
  //   }
  // ngOnInit(): void {
  //   this.dataService.getTrades().subscribe(response => {
  //     this.Portfoliodata = response;
  //     this.dataSource = new MatTableDataSource(this.Portfoliodata);
  // });
//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   }}
// function applyFilter(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
//   throw new Error('Function not implemented.');
// }

// function ngAfterViewInit() {
//   throw new Error('Function not implemented.');
// }

