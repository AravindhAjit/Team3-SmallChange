import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { lowerFirst } from 'cypress/types/lodash';
import { Client } from 'src/app/models/client';
import { ClientIdentification } from 'src/app/models/clientIdentification';
import { LoginFormComponent } from 'src/app/organisms/login-form/login-form.component';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {

  regbutton: any;

  fname:string ;
  lname:string;
  email:string;
  dob: Date;
  password:string;
  repassword:string;
  identificationtype:string;
  identificationvalue:string;
  country:string;

  regClient:Client;

  onClick(){
    console.log("CLICK");
  }

  constructor(private clientservice:ClientService,private router:Router) { }

  ngOnInit(): void {

  //   this.regbutton = document.getElementById("reg-button");

  //   this.regbutton?.addEventListener('click',()=>{

  //     if(!this.data.emailAdd.match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
  //         alert("Provide valid email");
  //     }
  //     else if(this.data.emailAdd==""){
  //       alert("Email can't be empty");
  //     }
  //     else if(this.data.password==""){
  //       alert("Password can't be empty");
  //     }
  //     else if(this.data.country==""){
  //       alert("Country can't be empty");
  //     }
  //     else{
  //       this.data = {
  //         "emailAdd" : this.data.emailAdd,
  //         "password" : this.data.password,
  //         "country" : this.data.country,
  //         "familyName" : this.data.familyName,
  //         "personlName" : this.data.personalName,
  //         "dob" : this.data.dob,
  //         "ira" : this.data.ira
  //       } 
  //     } 

  //     console.log(this.data);
  //   })
  }

  registerUser():void{

    if(this.password!=this.repassword){
      alert("Incorrect confirm password")
    }
    var user = new Client(this.clientservice.getLastClientId()+1,this.fname,this.lname,this.email,this.dob,this.country,this.password,0);
    this.clientservice.setLastClientId(user.clientId)
    console.log("Created client obj");
    console.log(user);
    
      // console.log(this.identificationtype);
      // console.log(this.identificationvalue);
      console.log("calling service");
      
      this.clientservice.addClient(user).subscribe(data=>this.regClient=data);
      console.log("registered");
      console.log(this.regClient);
      
      setTimeout(() => {
        this.router.navigateByUrl('login');
      }, (2000));
      
      
  }


}
