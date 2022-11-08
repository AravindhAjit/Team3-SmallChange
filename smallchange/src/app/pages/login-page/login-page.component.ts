import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
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
  constructor(private service:ClientService){}
  ngOnInit(): void {
  }

  login():void{
    console.log("login");
    var client = new Client(3,'','',this.email,new Date(),'',this.password,0);
    // console.log(client);
    console.log(this.service.authClient(client));

    
    // this.service.getAllClients().subscribe(data => {
    //   this.clients= data;
    // });    
    console.log(this.clients);
    
  }

  signup(value: any) {
    console.log(value);
    // this.service.setRegistrationpreference(value);
  }
}
