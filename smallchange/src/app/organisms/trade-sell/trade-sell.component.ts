import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/service/mock-data.service';

@Component({
  selector: 'app-trade-sell',
  templateUrl: './trade-sell.component.html',
  styleUrls: ['./trade-sell.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TradeSellComponent implements OnInit {

  quanitity:Number=0;
  selectedTrade = "";
  columnsToDisplay = ['instrumentId', 'description'];
  expandedinstrument: any | null;

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
