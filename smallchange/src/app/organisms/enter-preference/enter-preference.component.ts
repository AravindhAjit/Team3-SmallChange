import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-preference',
  templateUrl: './enter-preference.component.html',
  styleUrls: ['./enter-preference.component.css']
})
export class EnterPreferenceComponent implements OnInit {

  enter: boolean = false;
  edit: boolean = false;
  flag: boolean = false;
  agreed: boolean = false;
  setEditTrue: boolean = false;
  preferencesSet: boolean = false;
  riskTolerance = '';
  incomeCategory = '';
  investmentLength = ''
  investmentPurpose ='';


  constructor() { }

  ngOnInit(): void {
  }

  setPreference(): void {
      this.preferencesSet = true;
      this.service.setPreferences(new Preference(this.investmentPurpose,this.riskTolerance,this.incomeCategory,this.investmentLength,this.preferencesSet));
  }


  

  setflag():void {
    this.flag = true;
    this.enter = false;
    this.preferencesSet = true;
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

}
