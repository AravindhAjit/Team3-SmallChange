import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trade } from 'src/app/models/trade';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.trade = data.trade
  }
  ngOnInit(): void {
  }
  
 
  placeOrderBUY(trade:any,tradeQuantity:number,tradePrice:number,portfolioId:number):void{
    if(tradeQuantity>trade.instrument.maxQuantity || tradeQuantity<trade.instrument.minQuantity){
      alert("Enter quantity according to instrument");
    }
    else{
    console.log(trade);
    console.log( "BUY " + tradeQuantity);
    console.log(tradePrice);


    var tradee = new Trade(trade.instrument.instrumentId,tradeQuantity,trade.bidPrice,"B",1,uuidv4(),tradePrice,portfolioId); 
    console.log(tradee);
    alert("Order placed succesfully with id "+tradee.tradeId)
    
      
  }}

}


