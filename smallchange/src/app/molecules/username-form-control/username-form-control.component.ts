import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-form-control',
  templateUrl: './username-form-control.component.html',
  styleUrls: ['./username-form-control.component.css']
})
export class UsernameFormControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {

    var username_content=document.getElementById("username")?.getElementsByTagName('input')[0];
    var err_msg=document.getElementById("username-check");
    var text_box=document.getElementById("username-form");
    console.log(username_content?.innerHTML);

    username_content?.addEventListener('keyup', function(){

        
        if((String(username_content!.value).match('^[a-zA-Z0-9-_-]{3,18}$'))){
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


