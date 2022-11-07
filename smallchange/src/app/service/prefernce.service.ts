import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import { Preference } from '../models/preference';

@Injectable({
  providedIn: 'root'
})
export class PrefernceService {

  preference = new Preference('', '', '', '',false,0);
  constructor() { }


  setPreferences(preferences: Preference): void {
    this.preference.investmentLength = preferences.investmentLength;
    this.preference.incomeCategory = preferences.incomeCategory;
    this.preference.riskTolerance = preferences.riskTolerance;
    this.preference.investmentPurpose = preferences.investmentPurpose;
    this.preference.preferenceSet = preferences.preferenceSet;

  }

  getPreferences(): Preference {
    return this.preference;

  }
}

