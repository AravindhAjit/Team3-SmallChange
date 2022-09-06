import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-page',
  templateUrl: './preferences-page.component.html',
  styleUrls: ['./preferences-page.component.css']
})
export class PreferencesPageComponent implements OnInit {

  enter: boolean = false;
  edit: boolean = false;
  flag: boolean = false;
  agreed: boolean = false;
  setEditTrue: boolean = false;
  riskTolerance = '';
  incomeCategory = '';
  investmentLength = ''


  preferencesSet: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  enterPreferences(): void {
    this.edit=false;

    if (this.enter==true)
    this.enter=false;
    else{
    this.enter = true;
      if(!this.preferencesSet && this.flag )
      this.preferencesSet = true;

  }


  }

  setflag():void {
    this.flag = true;
    this.enter = false;
    this.preferencesSet = true;
  }

  editPreferences(): void {
    this.enter = false;
    if (this.edit==true)
      this.edit = false;
      
    else
      this.edit = true;
    // if(this.preferencesSet==false)
  
  }
  setAgreement():void{
    if(this.agreed==false)
    {
      this.agreed = true;
      // console.log(this.agreed);
      
    }
    else{
      this.agreed = false;
      // console.log(this.agreed);
    }
  }

  setEdit():void{
    this.setEditTrue = true;
  }

  finishEdit():void{
    this.setEditTrue = false;
  }
}

// console.log("enter ",this.enter);
// console.log("edit",this.edit);
// console.log("pref set ",this.preferencesSet);