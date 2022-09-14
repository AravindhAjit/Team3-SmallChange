import { Component, OnInit } from '@angular/core';
import { Preference } from 'src/app/models/preference';
import { PrefernceService } from 'src/app/service/prefernce.service';

@Component({
  selector: 'app-edit-preference',
  templateUrl: './edit-preference.component.html',
  styleUrls: ['./edit-preference.component.css']
})
export class EditPreferenceComponent implements OnInit {

  setEditTrue: boolean | undefined;
  preferencesSet: boolean | undefined;
  riskTolerance = '';
  incomeCategory = '';
  investmentLength = ''
  investmentPurpose ='';
  preference = new Preference('','','','',false);
  riskTolerances = ['None','CONSERVATIVE','BELOW AVERAGE','AVERAGE','ABOVE AVERAGE','AGGRESSIVE']
  incomeCategories = ['None','20001-40000','40001-60000','60001-80000','80001-100000','100001-150000','150000+']
  investmentLengths = ['None','0-5 YEARS','5-7 YEARS','7-10 YEARS','10-15 YEARS']

  constructor(private service:PrefernceService) {    
    this.preference = this.service.getPreferences();
    console.log(this.preference);
    
  }

  ngOnInit(): void {
    this.setEditTrue = false;
  }

  setEdit():void{
    this.setEditTrue = true;
  }

  finishEdit():void{
    this.setEditTrue = false;
    this.service.setPreferences(new Preference(this.investmentPurpose,this.riskTolerance,this.incomeCategory,this.investmentLength,true));


  }

  }



 



