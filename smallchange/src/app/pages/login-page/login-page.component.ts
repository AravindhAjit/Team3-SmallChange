import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  ngOnInit(): void {
  }

  login():void{
    console.log("login");
  }

  signup(value: any) {
    console.log(value);
    // this.service.setRegistrationpreference(value);
  }
}
