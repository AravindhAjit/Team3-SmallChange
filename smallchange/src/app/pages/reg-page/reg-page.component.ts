import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {

  regbutton: any;

  public data: any = {
    emailAdd : "",
    password : "",
    country : "",
    familyName : "",
    personalName : "",
    dob : "",
    ira : ""
  };

  constructor() { }

  ngOnInit(): void {

    this.regbutton = document.getElementById("reg-button");

    this.regbutton?.addEventListener('click',()=>{

      if(!this.data.emailAdd.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          alert("Provide valid email");
      }
      else if(this.data.emailAdd==""){
        alert("Email can't be empty");
      }
      else if(this.data.password==""){
        alert("Password can't be empty");
      }
      else if(this.data.country==""){
        alert("Country can't be empty");
      }
      else{
        this.data = {
          "emailAdd" : this.data.emailAdd,
          "password" : this.data.password,
          "country" : this.data.country,
          "familyName" : this.data.familyName,
          "personlName" : this.data.personalName,
          "dob" : this.data.dob,
          "ira" : this.data.ira
        } 
      } 

      console.log(this.data);
    })
  }

}
