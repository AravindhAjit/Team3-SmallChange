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

  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.url+'clients');

  }


  authClient(client: Client): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    var authflag=0;
    return of(this.http.post<number>(this.url+"auth",
      client, { headers: headers }));  
  }

  getClient(client: Login): Observable<any> {
    console.log(client);
    
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return of(this.http.post<Client>(this.url+"getClient",
      client, { headers: headers }));  
  }
}






// if(authflag==1)
// {
//   return this.http.post<Client>(this.url+"getClient",client,{headers:headers})
// }