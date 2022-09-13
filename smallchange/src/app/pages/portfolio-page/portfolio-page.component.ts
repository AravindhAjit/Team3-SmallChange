import { Component, OnInit } from '@angular/core';

import { MockDataService } from '../../service/mock-data.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  Portfoliodata : any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private dataService : MockDataService) {   }
  dataSource : any;
  ngOnInit(): void {
    this.dataService.getPortfolio().subscribe(response => {
      this.Portfoliodata = response;
      this.dataSource = new MatTableDataSource(this.Portfoliodata);
  });
  console.log(this.Portfoliodata);
}
}