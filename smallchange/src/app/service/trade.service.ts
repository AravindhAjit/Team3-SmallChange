import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updateTrade(trade:Trade): Observable<Trade> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post<Trade>(this.url+"updaretrade",trade, { headers: headers })
  }

  deleteTrade(trade:Trade): Observable<Trade> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post<Trade>(this.url+"deletetrade",trade, { headers: headers })
  }
}
