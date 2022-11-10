import { HttpClient, HttpHeaders } from '@angular/common/http';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Trade } from '../models/trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/smallchange/";
  

  executeTrade(trade:Trade): Observable<Trade> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post<Trade>(this.url+"executetrade",trade, { headers: headers })
  }

  updateTradeadd(trade:Trade): Observable<Trade> {
      // updateTradeadd(trade:Trade): void{
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    var url = this.url+"updatetradeadd/"+Number(trade.cashValue)+"/"+Number(trade.quantity)+"/"+trade.instrumentId;
    console.log(url);
    return this.http.post<Trade>(this.url+"updatetradeadd",trade, { headers: headers })
  }

  updateTradesubract(trade:Trade): Observable<Trade> 
  // updateTradesubract(trade:Trade): void{
    {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    var url = this.url+"updatetradesubract/"+Number(trade.cashValue)+"/"+Number(trade.quantity)+"/"+trade.instrumentId;
    console.log(url);
    
    return this.http.post<Trade>(url,trade, { headers: headers })
  }

  deleteTrade(trade:Trade): Observable<Trade> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post<Trade>(this.url+"deletetrade",trade, { headers: headers })
  }
}
