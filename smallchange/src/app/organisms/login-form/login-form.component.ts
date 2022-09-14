import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  defaultName: string = "";
  registrationName: string = "registration";

  username!: string;
  password!: string;

  Storeusername(event: any)
  {
    this.username = event.target.value;
  }

  Storepassword(event: any)
  {
    this.password = event.target.value;
  }

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */

    var loginbutton = document.getElementById("login-button");
    var form = document.getElementsByClassName("login-box")[0];


    loginbutton?.addEventListener('click',()=>{

      let JSON = {
        "username":this.username,
        "password":this.password,
        "usernameEncoded":window.btoa(this.username),
        "passwordEncoded":window.btoa(this.password)
      }

      console.log(JSON);
      console.log("usernaame"+this.username);
      console.log("password"+this.password);
    });

    form.addEventListener('onmousemove',()=>{
      var username = document.getElementById('form-username')?.getElementsByTagName('div')[0];
      var password = document.getElementById('form-password')?.getElementsByTagName('div')[0];
      var loginButton = loginbutton?.getElementsByTagName('app-button')[0].getElementsByTagName('button')[0];
      if(username?.style.display==='none' || password?.style.display==='none'){
        loginButton!.disabled=true;
      }
      else{
        loginButton!.disabled=false;
      }
      
    })
  }
}
