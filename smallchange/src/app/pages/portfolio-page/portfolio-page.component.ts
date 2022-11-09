import { Component, ViewChild, OnInit } from '@angular/core';

import { MockDataService } from '../../service/mock-data.service';
import { Order } from 'src/app/models/order';
import { Observable } from 'rxjs';
import { MatDialog,MatDialogConfig } from  '@angular/material/dialog';
import { PopupComponent } from 'src/app/organisms/popup/popup.component';
import { FundPopupComponent } from 'src/app/organisms/fund-popup/fund-popup.component';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/models/client';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Trade } from 'src/app/models/trade';
import { Logarithmic } from '@syncfusion/ej2-angular-charts';
import { TradeHistory } from 'src/app/models/tradehistory';
import { Portfolio } from '../../models/portfolio';
import { Stock } from 'src/app/models/stock';

// import { ThemeService } from 'ng2-charts';
// import { ChartType, ChartOptions } from 'chart.js';
//import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

// export class pieData{
//   constructor(
//   name: string,
//   value : number,
//   text : number
//   ){}

// }


@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
  

export class PortfolioPageComponent implements OnInit {
  // data : pieData[] = [
  //   {name : "stocks", value: 41.67, text: 41.67},
  //   {name : "bond", value: 33.33, text: 33.33},
  //   {name : "mutual funds", value: 25, text: 25},
  // ]
  // displayedColumns: string[] = ['symbol', 'quantity', 'value'];
  fund : Number;
  Portfoliodata : any;
  dataSource : any;
  client:Client

  govt:TradeHistory[]
  stock:TradeHistory[]
  cd:TradeHistory[]
  value: Portfolio[];
  total: any;

  constructor(private dataService : MockDataService, public dialog: MatDialog, private clientService:ClientService,private portfolioService:PortfolioService) { 
    }
  ngOnInit(): void {
      this.client = this.clientService.getCurrentClient();


this.portfolioService.getAllTradesGOVT(this.client)
.subscribe((users) => {
        this.govt = users
        console.log(this.govt);
    });

    this.portfolioService.getAllTradesSTOCK(this.client)
.subscribe((users) => {
        this.stock = users
        console.log(this.stock);
    });

    this.portfolioService.getAllTradesCD(this.client)
.subscribe((users) => {
        this.cd = users
        console.log(this.cd);
    });
    
  console.log(this.govt);
  


  }
//   findsum(response: Portfolio[]) {
//     this.value= response;  
//     console.log(this.value[0]);  
//     for(let j=0;j<response.length;j++){   
//          //this.total+= this.value[j].cash_value; 
//          console.log(this.total)  
//   }
// }

  addFunds(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "60%";
    this.dialog.open(FundPopupComponent , {width : '500px', height : '500px'});
  }
}




// function openDialog() {
//   throw new Error('Function not implemented.');
// }

