import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lowerFirst } from 'cypress/types/lodash';
import { Client } from 'src/app/models/client';
import { ClientIdentification } from 'src/app/models/clientIdentification';
import { LoginFormComponent } from 'src/app/organisms/login-form/login-form.component';

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


  public data: any = {
    emailAdd : "",
    password : "",
    country : "",
    familyName : "",
    personalName : "",
    dob : "",
    ira : ""
  };

  onClick(){
    console.log("CLICK");
  }

  constructor() { }

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

  //  var user = new Client(1,this.email,this.dob,this.fname,this.lname,0,new ClientIdentification(this.identificationtype,this.identificationvalue));
  //   console.log(user);
      console.log(this.identificationtype);
      console.log(this.identificationvalue);
    
  }

}
