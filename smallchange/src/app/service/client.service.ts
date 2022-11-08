import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/smallchange/';
  }

  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.usersUrl+'clients');

  }

  authClient(client:Client):Observable<any>{
    console.log(this.usersUrl+'auth');
    
    return this.http.get(this.usersUrl+'auth');
  }
}
