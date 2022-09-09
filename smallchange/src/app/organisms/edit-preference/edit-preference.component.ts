import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-preference',
  templateUrl: './edit-preference.component.html',
  styleUrls: ['./edit-preference.component.css']
})
export class EditPreferenceComponent implements OnInit {

  setEditTrue: boolean | undefined;
  preferencesSet: boolean | undefined;
  riskTolerance = 'HIGH';
  incomeCategory = '2000';
  investmentLength = '0-5 YEARS'
  investmentPurpose ='RANDOM';


  constructor() { }

  ngOnInit(): void {
    this.setEditTrue = false;
    this.preferencesSet = true;
  }

  setEdit():void{
    this.setEditTrue = true;
  }

  finishEdit():void{

  }

  }



 



