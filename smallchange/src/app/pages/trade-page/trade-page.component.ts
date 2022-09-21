import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewInstrument } from 'src/app/models/NewInstrument';
import { LoginFormComponent } from 'src/app/organisms/login-form/login-form.component';
import { MockDataService } from 'src/app/service/mock-data.service';
import { MatDialog } from  '@angular/material/dialog';
import { PopupComponent } from 'src/app/organisms/popup/popup.component';

@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.css']
})

export class TradePageComponent implements  AfterViewInit {

  instruments:any;
  dataSource: MatTableDataSource<NewInstrument>;
  displayedColumns = ['tradingsymbol','tradingname','tradingPrice','traddingPricePercentage']
  tradeselected:boolean = false;
  selectedTrade:any;
  selectedTradeSymbol:string
  selectedTradeName:string
  selectedTradePrice:string
  selectedTradeId:string
  selectedTradeMaxQuantity:string
  tradeActionselected:boolean = false;
  tradeAction:string = '';
  tradeQuantity:number = 1;


  constructor(private dataService : MockDataService , private  dialogRef : MatDialog ) {      
  this.dataService.getNewInstruments().subscribe(data=>this.instruments=data)
  this.dataSource = this.instruments;
  // console.log(this.instruments);
   }

  //  openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }

   showtrade(trade:any):void{
    console.log(trade);
    this.tradeActionselected = false;
    this.tradeselected = true;
    this.selectedTrade = trade;
    // this.selectedTradeName = trade.tradingname
    // this.selectedTradePrice = trade.tradingPrice
    // this.selectedTradeSymbol = trade.tradingsymbol
    // this.selectedTradeId = trade.id;
    
   }

   buyTrade(trade:NewInstrument):void{
    console.log("tradebuy");
    console.log(trade);
    this.tradeActionselected = true;
    this.tradeAction = 'BUY'
    
    
   }

   sellTrade(trade:NewInstrument):void{
    console.log("tradesell");
    console.log(trade);
    this.tradeActionselected = true;
    this.tradeAction = 'SELL'
   }
 
   placeOrder(trade:any,tradeAction:string,tradeQuantity:number):void{
    console.log(trade);
    console.log(tradeAction + " " + tradeQuantity);
    console.log(tradeQuantity*trade.tradingPrice);
    this.dialogRef.open(PopupComponent,{
      data:{
        trade:trade,
        tradeAction:tradeAction,
        tradeQuantity:tradeQuantity,
      }
    });

    this.tradeselected = false;
    this.selectedTrade = null
    this.tradeAction = ""
    this.tradeQuantity = 1
    this.tradeActionselected = false;
    
   }

   closeInstrument():void{
    this.tradeselected = false;
    this.selectedTrade = null
    this.tradeAction = ""
    this.tradeQuantity = 1
    this.tradeActionselected = false;

   }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

