import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-form-control',
  templateUrl: './password-form-control.component.html',
  styleUrls: ['./password-form-control.component.css']
})
export class PasswordFormControlComponent implements OnInit {

  public ngOnInit(): void {

    var password_content=document.getElementById("password")?.getElementsByTagName('input')[0];
    var err_msg=document.getElementById("password-check");
    var text_box=document.getElementById("password-form");
    console.log(password_content?.innerHTML);

    password_content?.addEventListener('keyup', function(){

        
        if((String(password_content!.value).match('^[a-zA-Z0-9-_-]{6,24}$'))){
          err_msg!.style.display="none";
          text_box!.style.borderColor="black";
  
        }
        else{

          err_msg!.style.display="block";
          text_box!.style.borderColor="red";
        }
      
      
    });
  }

}
