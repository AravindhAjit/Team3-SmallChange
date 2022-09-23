import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  trade:any
  tradeAction:string
  tradeQuantity:number

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.trade = data.trade
    this.tradeAction = data.tradeAction
    this.tradeQuantity = data.tradeQuantity
  }
  ngOnInit(): void {
  }

}
