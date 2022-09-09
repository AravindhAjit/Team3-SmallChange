import { Component, OnInit } from '@angular/core';
import { Preference } from 'src/app/models/preference';
import { PrefernceService } from 'src/app/service/prefernce.service';

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
  investmentPurpose :string ='';


  constructor(private service:PrefernceService) { }

  ngOnInit(): void {
  }

  setPreference(): void {
      this.preferencesSet = true;
      this.service.setPreferences(new Preference(this.investmentPurpose,this.riskTolerance,this.incomeCategory,this.investmentLength));
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

}
