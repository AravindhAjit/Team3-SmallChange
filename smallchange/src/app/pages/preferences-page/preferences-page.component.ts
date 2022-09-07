import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-page',
  templateUrl: './preferences-page.component.html',
  styleUrls: ['./preferences-page.component.css']
})
export class PreferencesPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }




}

// console.log("enter ",this.enter);
// console.log("edit",this.edit);
// console.log("pref set ",this.preferencesSet);