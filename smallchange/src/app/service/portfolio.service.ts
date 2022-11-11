import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Portfolio } from '../models/portfolio';
import { Trade } from '../models/trade';
import { TradeHistory } from '../models/tradehistory';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/smallchange/";

  govt:Trade[];
  stock:Trade[];
  cd:Trade[];
  top5quant:Trade[]
  top5cash:Trade[]
 
  
  settop5quant(top5quant:Trade[]){
    this.top5quant=top5quant;
    // console.log("Set top 5 quant");
    // console.log(this.top5quant);
  }

  settop5cash(top5cash:Trade[]){
    this.top5cash=top5cash;
    // console.log("Set top 5 cash");
    // console.log(this.top5cash);
    
    
  }

  // gettop5quantvalue(){
  //   var res=[2]
  //   for(let i of this.top5quant){
  // console.log(i);
        

  //   }

    
  //   return res;
  // }

  // gettop5quantname(){
  //   var res = []
  //   for(let i of this.top5quant){
  //     res.push(i.instrumentdescription)
  //   }
  //   console.log(res);
    
  //   return res;
  // }
  

  gettop5casj(){
    console.log("top5cash");
    console.log(this.top5cash);
    
    return this.top5cash;
  }

  gettop5quant(){
    console.log("top5cash");
    console.log(this.top5quant);
    
    return this.top5quant;
  }
  
  setgovt(govt:Trade[]){
    this.govt=govt;
  }
  
  
  setstock(stock:Trade[]){
    this.stock=stock;
  }


  setcd(cd:Trade[]){
    this.cd=cd;
  }

  getgovt(){
    return this.govt
  }

  getstock(){
    return this.stock
  }

  getcd(){
    return this.cd
  }

  getcashvalue(govt:Trade[]){
    var res=0;
    for(let i of govt){
        res+=i.cashValue
    }
    return res;
  }

  getAllTradesGOVT(client: Client): Observable<Trade[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.get<Trade[]>(this.url+"govt/"+Number(client.clientId))
  }

  
  getAllTradesSTOCK(client: Client): Observable<Trade[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.get<Trade[]>(this.url+"stock/"+Number(client.clientId))
  }


  getAllTradesCD(client: Client): Observable<Trade[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.get<Trade[]>(this.url+"cd/"+Number(client.clientId))
  }

  
  getTopQuantity(client: Number): Observable<Trade[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.get<Trade[]>(this.url+"getTopQuantity/"+Number(client))
  }

  
  getTopCashValue(client: Number): Observable<Trade[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.get<Trade[]>(this.url+"getTopcashvalue/"+Number(client))
  }

}
