import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Login } from 'src/app/models/login';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email:string;
  password:string;
  res:number[];
  clients: Client[];
  clientAuth:number;
  client:Client;

  constructor(private service:ClientService,private router:Router){}
  ngOnInit(): void {
  }

  login():void{
    console.log("login");
    var client = new Client(3,'','',this.email,new Date(),'',this.password,0);
    var login = new Login(this.email,this.password)
    // console.log(client);
    // console.log(this.service.authClient(client).subscribe(data=>this.clientAuth=data));
    // console.log(this.client.email+" "+this.client.password);
    // this.service.getClient(login).subscribe(data=>this.client=data);
    console.log(this.client.clientId);
    
    // this.service.getAllClients().subscribe(data => {
    //   this.clients= data;
    // });    
    console.log(this.clients);

    this.router.navigateByUrl('portfolio')
    
    
    
    
  }

  signup(value: any) {
    console.log(value);
    // this.service.setRegistrationpreference(value);
  }
}
