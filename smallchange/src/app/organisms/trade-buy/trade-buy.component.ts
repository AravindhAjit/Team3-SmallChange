import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/app/models/trade';
import { MockDataService } from 'src/app/service/mock-data.service';

@Component({
  selector: 'app-trade-buy',
  templateUrl: './trade-buy.component.html',
  styleUrls: ['./trade-buy.component.css']
})
export class TradeBuyComponent implements OnInit {

  selectedTrade = "";
  trades: Trade[] = [

    {instrumentId: "123", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "206"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "124", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "S", clientId: "102", orderId: "207"},
    tradeId: "401", cashValue: 1500},
    
    {instrumentId: "125", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "2", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "208"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "126", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "S", clientId: "106", orderId: "209"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "127", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "3", quantity: 25, targetPrice: 145, direction: "S", clientId: "108", orderId: "211"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "128", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "6", quantity: 25, targetPrice: 145, direction: "B", clientId: "102", orderId: "222"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "129" , quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "2", quantity: 25, targetPrice: 145, direction: "B", clientId: "104", orderId: "244"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "130", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "8", quantity: 25, targetPrice: 145, direction: "S", clientId: "106", orderId: "219"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "131", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "205"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "132", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "9", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "205"},
    tradeId: "401", cashValue: 1500}
  ];
  
  constructor(private service:MockDataService) {  
    console.log(this.trades[0]);
    

  }
 
  ngOnInit(): void {
    // .subscribe(data => {
    // this.trades = data;
    // });
   }
 
    
    }

  


