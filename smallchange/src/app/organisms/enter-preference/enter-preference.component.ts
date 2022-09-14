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
  investmentPurpose ='';

  riskTolerances = ['None','CONSERVATIVE','BELOW AVERAGE','AVERAGE','ABOVE AVERAGE','AGGRESSIVE']
  incomeCategories = ['None','20001-40000','40001-60000','60001-80000','80001-100000','100001-150000','150000+']
  investmentLengths = ['None','0-5 YEARS','5-7 YEARS','7-10 YEARS','10-15 YEARS']

  constructor(private service:PrefernceService) { }

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

    {
    if(this.agreed==false)
    {
      this.agreed = true;
      // console.log(this.agreed);
      
    }
    else {
      this.agreed = false;
      // console.log(this.agreed);
    }
  }
  }

}
