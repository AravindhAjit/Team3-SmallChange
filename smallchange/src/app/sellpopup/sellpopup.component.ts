import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../models/client';
import { Trade } from '../models/trade';
import { TradeHistory } from '../models/tradehistory';
import { AcivityService } from '../service/acivity.service';
import { ClientService } from '../service/client.service';
import { TradeService } from '../service/trade.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-sellpopup',
  templateUrl: './sellpopup.component.html',
  styleUrls: ['./sellpopup.component.css']
})
export class SellpopupComponent implements OnInit {

  trade: any;
  client:Client
  tradeQuantity:number
  tradeCashvalue:number
  executedTrade:Trade
  recentTradeHistory: TradeHistory;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private clientService:ClientService,private tradeService:TradeService,private acivityService:AcivityService) {

    this.trade = data.trade
    this.tradeQuantity = this.trade.quantity
    this.tradeCashvalue = this.trade.executionPrice;
    console.log("selected trade"+this.trade);
    this.client = this.clientService.getCurrentClient();

  }
  ngOnInit(): void {
  }

  sell(){
    if(this.tradeQuantity>this.trade.quantity)
    {
      alert("Cannot sell more than you own")
    }
    else if(this.tradeQuantity<0){
      alert("Enter a valid number")
    }
    else{

      var tradee = new Trade(this.trade.instrument.instrumentId,this.tradeQuantity-this.tradeQuantity,this.trade.executionPrice,'S',this.trade.cashValue-this.tradeCashvalue,100,this.client.clientId,uuidv4(),this.trade.categoryId,this.trade.instrumentDescription);
      console.log(tradee);
      
      this.client.funds += this.tradeCashvalue
      this.clientService.addFunds(this.client).subscribe((data)=>{console.log(data)});
      this.client=this.clientService.getCurrentClient();

      if(this.tradeQuantity==this.trade.quantity)
      {
        //delete record from portfolio
        this.tradeService.deleteTrade(tradee).subscribe(data=>this.executedTrade=data);

      }
      else{
        //modify record in portfolio with lesser price,cashvalue based on trade instrument id equal value
        this.tradeService.executeTrade(tradee).subscribe(data=>this.executedTrade=data);

      }
 

    var th = new TradeHistory(tradee.instrumentId,this.tradeQuantity,this.trade.executionPrice,'S',tradee.tradeId,this.tradeCashvalue,this.client.clientId,this.trade.instrumentDescription,this.trade.categoryid)
    console.log(th);
    alert("Trade sell succesful with id"+tradee.tradeId)

    this.acivityService.addTradeHistory(th).subscribe(data=>this.recentTradeHistory=data);

    }
    
  }

}
