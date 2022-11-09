import { Component, OnInit } from '@angular/core';
import { lowerFirst, toInteger } from 'cypress/types/lodash';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-fund-popup',
  templateUrl: './fund-popup.component.html',
  styleUrls: ['./fund-popup.component.css']
})
export class FundPopupComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  funds:number
  client:Client;
  ngOnInit(): void {
    this.client=this.clientService.getCurrentClient();
  }
add(){
  console.log(Number(this.funds));
  console.log(Number(this.client.funds));
  console.log(Number(this.funds)+Number(this.client.funds));
  this.client.funds=Number(this.funds)+Number(this.client.funds)
  // console.log(this.client);
  
  
  // this.clientService.setCurrentClientFunds(this.client.funds);
  // this.client=this.clientService.getCurrentClient();
  this.clientService.addFunds(this.client).subscribe((data)=>{console.log(data);
  });
  this.client=this.clientService.getCurrentClient();

}
}
