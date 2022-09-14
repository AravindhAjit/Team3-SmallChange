import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { Trade } from 'src/app/models/trade';
import { MockDataService } from 'src/app/service/mock-data.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-trade-buy',
  templateUrl: './trade-buy.component.html',
  styleUrls: ['./trade-buy.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TradeBuyComponent implements OnInit {

  selectedTrade = "";
  columnsToDisplay = ['instrumentId', 'description'];
  expandedinstrument: any | null;
  quanitity:Number=0;
  instruments :any;

  constructor(private dataService : MockDataService) {   }
  ngOnInit(): void {
   this.dataService.getInstruments().subscribe(response => {
      this.instruments = response;
      
      
  });
  console.log(this.instruments[0].instrument);   
};


createTradeform(instrument:any){
  console.log(instrument.description);
 
}


   }
 
    

  




