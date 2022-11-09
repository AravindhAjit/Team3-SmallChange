import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';
import { Portfolio } from 'src/app/models/portfolio';
import { Trade } from 'src/app/models/trade';
import { TradeHistory } from 'src/app/models/tradehistory';
import { AcivityService } from 'src/app/service/acivity.service';
import { ClientService } from 'src/app/service/client.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TradeService } from 'src/app/service/trade.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  trade:any
  tradeAction:string
  tradeQuantity:number
  tradePrice:number
  portfolioId:number
  currentportfolio:number
  portfolios : Portfolio[];
  client:Client;
  executedTrade:Trade
  recentTradeHistory:TradeHistory
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private clientService:ClientService,private tradeService:TradeService,private acivityService:AcivityService) {
    this.trade = data.trade
    console.log("selected trade"+this.trade);
    
    this.tradeQuantity = this.trade.instrument.minQuantity
    this.client = this.clientService.getCurrentClient();
  }
  ngOnInit(): void {
  }
  
 
  placeOrderBUY(selectedtrade:any,tradeQuantity:number,portfolioId:number):void{
    if(tradeQuantity>selectedtrade.instrument.maxQuantity || tradeQuantity<selectedtrade.instrument.minQuantity){
      alert("Enter quantity according to instrument");
    }
    else{

    console.log(portfolioId);
    console.log(tradeQuantity);
    
    var tradee = new Trade(this.trade.instrument.instrumentId,tradeQuantity,this.trade.askPrice,'B',this.trade.askPrice*tradeQuantity,100,this.client.clientId,uuidv4(),selectedtrade.instrument.categoryId);
    console.log(tradee);
    this.tradeService.executeTrade(tradee).subscribe(data=>this.executedTrade=data);
    alert("Order placed succesfully with id "+tradee.tradeId)
    

    var th = new TradeHistory(tradee.instrumentId,tradee.quantity,tradee.executionPrice,tradee.direction,tradee.tradeId,tradee.cashValue,tradee.clientId,this.trade.instrument.instrumentDescription,tradee.categoryid);
    console.log("trade history");
    console.log(th);
    this.acivityService.addTradeHistory(th).subscribe(data=>this.recentTradeHistory=data);

          
  }}

}


