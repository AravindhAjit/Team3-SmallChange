import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../service/mock-data.service';
import { Order } from 'src/app/models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  Alldata : any;
  constructor(private dataService : MockDataService) {   }
  ngOnInit(): void {
    this.dataService.getOrders().subscribe(response => {
      this.Alldata = response;
  });
  console.log(this.Alldata);
}
}