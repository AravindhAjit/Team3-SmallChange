import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeHistory } from '../models/tradehistory';

@Injectable({
  providedIn: 'root'
})
export class AcivityService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/smallchange/";

  getTradeHistory(category: string): Observable<TradeHistory[]> {
    return this.http.get<TradeHistory[]>(this.url+"getth")
  }
}
