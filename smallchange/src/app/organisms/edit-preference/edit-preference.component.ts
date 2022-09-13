import { Component, OnInit } from '@angular/core';

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
  preference = new Preference('','','','');

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



 



