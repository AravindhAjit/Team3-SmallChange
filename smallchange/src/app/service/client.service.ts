import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/smallchange/';
  }

  client:Client
  lastClientid=4

  getLastClientId(){
    return this.lastClientid
  }

  setLastClientId(id:number){
    this.lastClientid=id;
  }
  getCurrentClient():Client{
    return this.client;
  }

  getCurrentClientFunds():number{
    return this.client.funds;
  }
  setCurrentClient(client:Client):void{
    this.client=client;
  }

  setCurrentClientFundsadd(funds:number):void{
    this.client.funds+=funds;
  }
  setCurrentClientFundssubract(funds:number):void{
    this.client.funds-=funds;
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url+"clients")
  }


  authClient(client: Client): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    var authflag=0;
    return of(this.http.post<number>(this.url+"auth",
      client, { headers: headers }));  
  }

  getClient(client: Login): Observable<Client> {
    console.log(client);
    
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return (this.http.post<Client>(this.url+"getClient",
      client, { headers: headers }));  
  }

  updatefunds(client: Client):Observable<any>{
        
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return (this.http.post<Client>(this.url+"funds",
      client, { headers: headers }));  
  }

  checkEmail(client:Client):number{
     
    var auth=0;
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
     (this.http.post<number>(this.url+"check",
      client, { headers: headers })).subscribe(data=>auth=data);
      console.log("auth "+auth);
      
      return 111;
  }

  addClient(client:Client):Observable<Client>{
        
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return (this.http.post<Client>(this.url+"addclient",
      client, { headers: headers }));  
  }
}






// if(authflag==1)
// {
//   return this.http.post<Client>(this.url+"getClient",client,{headers:headers})
// }