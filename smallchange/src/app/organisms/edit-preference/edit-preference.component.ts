import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-preference',
  templateUrl: './edit-preference.component.html',
  styleUrls: ['./edit-preference.component.css']
})
export class EditPreferenceComponent implements OnInit {

  enter: boolean = false;
  edit: boolean = false;
  flag: boolean = false;
  agreed: boolean = false;
  setEditTrue: boolean = false;
  preferencesSet: boolean = true;
  riskTolerance = '';
  incomeCategory = '';
  investmentLength = ''
  investmentPurpose ='';


  constructor() { }

  ngOnInit(): void {
  }

  enterPreferences(): void {
    console.log(this.enter);
    
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
