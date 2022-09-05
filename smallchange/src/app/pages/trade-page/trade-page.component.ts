import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.css']
})
export class TradePageComponent implements OnInit {

  buy:boolean = false;
  sell:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  performBuy():void {
    if (this.buy==false)
      {if (this.sell==true)
      {
        this.sell = false;
      }  
       this.buy=true;}
  else
    this.buy = false;
    
  }

  performSell():void {
    if (this.sell==false)
      {if (this.buy==true)
      {
        this.buy = false;
      }  
       this.sell=true;}
  else
    this.sell = false;
    
  }

}
