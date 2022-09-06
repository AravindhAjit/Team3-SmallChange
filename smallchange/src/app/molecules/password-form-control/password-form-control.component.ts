import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.css']
})
export class PasswordFormControlComponent implements OnInit {

  public ngOnInit(): void {
    /* This component requires some JavaScript functionality. Please enter it within this ngOnInit() function. */
    var password_content=document.getElementById("password");
    var err_msg=document.getElementById("password-check");
    var text_box=document.getElementById("password-form");

    password_content?.addEventListener('keyup', event =>{

      // if((String(event.target.value).match('^[a-zA-Z0-9-_-]{6,24}$'))){
      //   err_msg?.style.display="none";
      //   text_box?.style.borderColor="black";

      // }
      // else{
      //   err_msg?.style.display="block";
      //   text_box?.style.borderColor="red";
      // }
    });
  }

}
