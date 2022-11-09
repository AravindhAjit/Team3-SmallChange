import { Component, ViewChild, OnInit } from '@angular/core';

import { MockDataService } from '../../service/mock-data.service';
import { Order } from 'src/app/models/order';
import { Observable } from 'rxjs';
import { MatDialog,MatDialogConfig } from  '@angular/material/dialog';
import { PopupComponent } from 'src/app/organisms/popup/popup.component';
import { FundPopupComponent } from 'src/app/organisms/fund-popup/fund-popup.component';
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
  constructor(private dataService : MockDataService, public dialog: MatDialog) { 
    }
  ngOnInit(): void {
    this.dataService.getPortfolio().subscribe(response => {
      this.Portfoliodata = response;
      // this.dataSource = new MatTableDataSource(this.Portfoliodata);
   
  });

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(FundPopupComponent, {
  //     width: '250px', 
  //     data: {fund: this.fund } 
  //   });
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     this.fund = result;
  //   });

  }
  addFunds(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = "60%";
    this.dialog.open(FundPopupComponent , {width : '500px', height : '500px'});
  }
}




// function openDialog() {
//   throw new Error('Function not implemented.');
// }

