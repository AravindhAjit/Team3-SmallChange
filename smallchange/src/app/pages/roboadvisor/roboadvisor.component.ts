import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Preference } from 'src/app/models/preference';
import { PrefernceService } from 'src/app/service/prefernce.service';

@Component({
  selector: 'app-roboadvisor',
  templateUrl: './roboadvisor.component.html',
  styleUrls: ['./roboadvisor.component.css']
})
export class RoboadvisorComponent implements OnInit {
  value: number = 1;
  preference = new Preference('', '', '', '', false);

  investmentPurpose: string = '';
  riskTolerance: string = '';
  riskTolerances = [
    { id: 1, language: 'CONSERVATIVE' },
    { id: 2, language: 'BELOW AVERAGE' },
    { id: 3, language: 'AVERAGE' },
    { id: 4, language: 'ABOVE AVERAGE' },
    { id: 5, language: 'AGGRESSIVE' },

  ]
  incomeCategories = ['20001-40000', '40001-60000', '60001-80000', '80001-100000', '100001-150000', '150000+']
  investmentLengths = ['0-5 YEARS', '5-7 YEARS', '7-10 YEARS', '10-15 YEARS']
  incomeCategory: string = '';
  investmentLength: string = '';
  roboAdvisoragreed: boolean = false;
  enterStarted: boolean = false;
  editStarted: boolean = false;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: "Conservative" },
      { value: 2, legend: "Below Average" },
      { value: 3, legend: "Average" },
      { value: 4, legend: "Above Average" },
      { value: 5, legend: "Aggressive" }
    ]
  };

  constructor(private service: PrefernceService) {
    this.preference = this.service.getPreferences();

    // console.log(this.preference);

  }
  ngOnInit(): void {
  }

  finishEnter(): void {
    // console.log(this.investmentPurpose); 

    this.preference.investmentPurpose = this.investmentPurpose;
    this.preference.incomeCategory = this.incomeCategory;
    this.preference.preferenceSet = true;
    this.preference.investmentLength = this.investmentLength;
    this.preference.riskTolerance = this.riskTolerances.find(x => x.id === this.value)?.language;
    this.service.setPreferences(this.preference);

    this.preference = this.service.getPreferences();

    this.editStarted = false;
    this.enterStarted = false;

    console.log(this.service.getPreferences());
  }

  agreeRoboAdvisor(): void {
    this.roboAdvisoragreed = !this.roboAdvisoragreed;
  }
  startEnter() {

    this.enterStarted = true;
    this.roboAdvisoragreed = false;
  }
  startEdit() {
    this.editStarted = true;
    this.roboAdvisoragreed = false;

  }

}
