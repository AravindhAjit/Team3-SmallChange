import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentPrice } from '../models/instrumentprice';
import { LoginFormComponent } from '../organisms/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  private instrumentUrl:string='http://localhost:3000/fmts/trades/prices/'

  getAllPrices() :Observable<InstrumentPrice[]> {

    // getting the insruments from the server and then populating the instrument id
    return this.http.get<InstrumentPrice[]>(this.instrumentUrl);
  }

  getPricesByCategory(category:String) :Observable<InstrumentPrice[]> {

    // getting the insruments from the server and then populating the instrument id
      console.log(this.instrumentUrl+category);
      
    return this.http.get<InstrumentPrice[]>(this.instrumentUrl+category);
  }
 }

