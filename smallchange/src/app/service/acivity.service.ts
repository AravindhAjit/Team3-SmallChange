import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeHistory } from '../models/tradehistory';

@Injectable({
  providedIn: 'root'
})
export class AcivityService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/smallchange/";

  

  getTradeHistory(): Observable<TradeHistory[]> {
    return this.http.get<TradeHistory[]>(this.url+"getth")
  }

  addTradeHistory(th: TradeHistory): Observable<TradeHistory> {

    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post<TradeHistory>(this.url+"addth",th,{ headers: headers })
  }
}
