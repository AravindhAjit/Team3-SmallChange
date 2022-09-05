import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-page',
  templateUrl: './preferences-page.component.html',
  styleUrls: ['./preferences-page.component.css']
})
export class PreferencesPageComponent implements OnInit {

  enter: boolean = false;
  edit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  enterPreferences():void {
    if (this.enter==false)
      {if (this.edit==true)
      {
        this.edit = false;
      }  
       this.enter=true;}
  else
    this.enter = false;
    
  }

  editPreferences():void {
    if (this.edit==false)
      {if (this.enter==true)
      {
        this.enter = false;
      }  
       this.edit=true;}
  else
    this.edit = false;
    
  }

}
