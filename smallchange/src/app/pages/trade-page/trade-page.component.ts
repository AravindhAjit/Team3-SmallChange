import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NewInstrument } from 'src/app/models/NewInstrument';
import { MockDataService } from 'src/app/service/mock-data.service';
import { MatDialog } from  '@angular/material/dialog';
import { PopupComponent } from 'src/app/organisms/popup/popup.component';
import { PriceService } from 'src/app/service/price.service';
import {v4 as uuidv4} from 'uuid';
import { Trade } from 'src/app/models/trade';
import { Price } from 'src/app/models/price';


@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.css']
})

export class TradePageComponent  {

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

  category: string = "";
  showModal: boolean;
  instrument: Price;
  order: any;


  constructor(private dataService : MockDataService , private  dialogRef : MatDialog, private service:PriceService) {

   }

   ngOnInit(): void {
    this.fetch('')
  }

  fetch(category: string){
    this.service.getInstruments(category).subscribe(data=>{
      this.instruments = data;
      console.log(this.instruments);
      
    });}


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
    var tradevalue = tradeQuantity*trade.bidPrice;

    var tradee = new Trade(trade.instrument.instrumentId,tradeQuantity,trade.bidPrice,tradeAction,1,uuidv4(),tradevalue,1); 
    console.log(tradee);
    
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

displayModal(instrument: Price) {
  this.dialogRef.open(PopupComponent,{
    data:{
      trade:instrument,
    }
  });
}

}

