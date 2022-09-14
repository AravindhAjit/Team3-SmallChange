import { Injectable } from '@angular/core';
import { Preference } from '../models/preference';

@Injectable({
  providedIn: 'root'
})
export class PrefernceService {

  preference = new Preference('', '', '', '',false);
  constructor() { }

  setPreferences(preferences: Preference): void {
    this.preference.investmentLength = preferences.investmentLength;
    this.preference.incomeCategory = preferences.incomeCategory;
    this.preference.riskTolerance = preferences.riskTolerance;
    this.preference.purposeOfInvestment = preferences.purposeOfInvestment;
    this.preference.preferenceSet = preferences.preferenceSet;

  }

  getPreferences(): Preference {
    return this.preference;

  }
}

