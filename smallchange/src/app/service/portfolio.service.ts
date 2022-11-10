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

}
