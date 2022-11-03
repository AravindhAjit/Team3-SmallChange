import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NewInstrument } from 'src/app/models/NewInstrument';
import { MockDataService } from 'src/app/service/mock-data.service';
import { MatDialog } from  '@angular/material/dialog';
import { PopupComponent } from 'src/app/organisms/popup/popup.component';
import { PriceService } from 'src/app/service/price.service';
import { Order } from 'src/app/models/order';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.css']
})

export class TradePageComponent implements  AfterViewInit {

  instruments:any;

  tradeselected:boolean = false;
  selectedTrade:any;
  selectedTradeSymbol:string
  selectedTradeName:string
  selectedTradePrice:string
  selectedTradeId:string
  selectedTradeMaxQuantity:string
  tradeActionselected:boolean = false;
  tradeAction:string = '';
  tradeQuantity:number;
  tradePrice:number;
  selectedRowIndex:number
  instrumentPrices:any 
  constructor(private dataService : MockDataService , private  dialogRef : MatDialog, private service:PriceService) {

  this.getAllPrice()
   }


   showtrade(trade:any):void{
    console.log(trade);
    this.tradeActionselected = false;
    this.tradeselected = true;
    this.selectedTrade = trade;
    this.tradeActionselected = false;

    
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

   getAllPrice():void{
    this.service.getAllPrices().subscribe(users => { this.instrumentPrices = users });
    console.log(this.instrumentPrices);     
  }

  getPricesGOVT():void{
    this.service.getPricesByCategory("GOVT").subscribe(users => { this.instrumentPrices = users });
    console.log(this.instrumentPrices);     
  }

  getPricesSTOCK():void{
    this.service.getPricesByCategory("STOCK").subscribe(users => { this.instrumentPrices = users });
    console.log(this.instrumentPrices);     
  }

  getPricesCD():void{
    this.service.getPricesByCategory("CD").subscribe(users => { this.instrumentPrices = users });
    console.log(this.instrumentPrices);     
  }
 
   placeOrder(trade:any,tradeAction:string,tradeQuantity:number):void{
    if(tradeQuantity>trade.instrument.maxQuantity || tradeQuantity<trade.instrument.minQuantity){
      alert("Enter quantity according to instrument");
    }
    else{
    console.log(trade);
    console.log(tradeAction + " " + tradeQuantity);
    console.log(tradeQuantity*trade.askPrice);
    this.dialogRef.open(PopupComponent,{
      data:{
        trade:trade,
        tradeAction:tradeAction,
        tradeQuantity:tradeQuantity,
      }
    } );
  
    var order = new Order(trade.instrument.instrumentId,tradeQuantity,tradeQuantity*trade.bidPrice,tradeAction,"clientid",uuidv4());
    console.log(order);
    
    this.tradeselected = false;
    this.selectedTrade = null
    this.tradeAction = ""
    this.tradeQuantity = 1
    this.tradeActionselected = false;
  }
   }

   closeInstrument():void{
    this.tradeselected = false;
    this.selectedTrade = null
    this.tradeAction = ""
    this.tradeQuantity = 1
    this.tradeActionselected = false;
   }

   highlight(row: number) {
    this.selectedRowIndex = row;
}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
  }

}

