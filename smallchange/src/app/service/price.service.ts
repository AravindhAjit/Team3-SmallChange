import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentPrice } from '../models/instrumentprice';
import { Price } from '../models/price';
import { LoginFormComponent } from '../organisms/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/fmts/trades/";
  
  
  getInstruments(category: string): Observable<Price[]> {
    return this.http.get<Price[]>( `${this.baseUrl}prices/${category}`)
  }
  // getAllPrices() :Observable<InstrumentPrice[]> {

  //   return this.http.get<InstrumentPrice[]>(this.instrumentUrl);
  // }

  // getPricesByCategory(category:String) :Observable<InstrumentPrice[]> {

  //   // getting the insruments from the server and then populating the instrument id
  //     console.log(this.instrumentUrl+category);
      
  //   return this.http.get<InstrumentPrice[]>(this.instrumentUrl+category);
  // }
 }

