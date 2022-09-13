import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-form-control',
  templateUrl: './username-form-control.component.html',
  styleUrls: ['./username-form-control.component.css']
})
export class UsernameFormControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var userName=document.getElementById("username");
    var err_msg=document.getElementById("username-check");
    var text_box = document.getElementById("username-form");
 
    // userName?.addEventListener('keyup', event =>{

    //   if((String(event.target.value).match('^[a-zA-Z0-9-_-]{3,18}$'))){
    //     err_msg?.style.display="none";
    //     text_box?.style.borderColor="black";
    //     console.log(String(event.target.value));

    //   }
    //   else{
    //     err_msg?.style.display="block";
    //     text_box?.style.borderColor="red";

        
    //   }
    // });
  }
  }


