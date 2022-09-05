import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // username: string;
  // password: string;

  //   Storeusername(event)
  //   {
  //     this.username = event.target.value;
  //   }

  //   Storepassword(event)
  //   {
  //     this.password = event.target.value;
  //   }

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
  

    var loginbutton = document.getElementById("login-button");

    loginbutton?.addEventListener('click',()=>{

      // let JSON = {
      //   "username":this.username,
      //   "password":this.password,
      //   "usernameEncoded":window.btoa(this.username),
      //   "passwordEncoded":window.btoa(this.password)
      // }

      console.log(JSON);
      // console.log("usernaame"+this.username);
      // console.log("password"+this.password);
      // console.log("json usernaame"+this.data.username);
      // console.log("json password"+this.data.password);


    })

        }
  }
