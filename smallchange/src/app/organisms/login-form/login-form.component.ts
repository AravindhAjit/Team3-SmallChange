import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() verification = false;

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

  check(current: any){

    const correctAUTH = {
      "username": "admin",
      "password": "admin",
      "usernameEncoded": "YWRtaW4=",
      "passwordEncoded": "YWRtaW4="
    }

    // console.log("CORRECT : ", correctAUTH);
    // console.log("INPUT : ", current);
    
    if(JSON.stringify(current) === JSON.stringify(correctAUTH)) return true;
    else return false;
  }

  onClick(){

    let JSON = {
      "username":this.username,
      "password":this.password,
      "usernameEncoded":window.btoa(this.username),
      "passwordEncoded":window.btoa(this.password)
    }

    console.log(JSON);

    if(this.check(JSON)==true){
      this.verification = true;
      this.service.setLogIn();
    }
    else alert("Wrong Login or Password !");
  }

  constructor(private service: AuthService){ }

  public ngOnInit(): void {
  }
}
