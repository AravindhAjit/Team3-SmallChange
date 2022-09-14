import { Component, ViewChild, OnInit } from '@angular/core';

import { MockDataService } from '../../service/mock-data.service';
import { Order } from 'src/app/models/order';
import { Observable } from 'rxjs';
// import { ChartType, ChartOptions } from 'chart.js';
//import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';



@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  // public pieChartOptions: ChartOptions<'pie'> = {
  //   responsive: false,
  // };
  // public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  // public pieChartDatasets = [ {
  //   data: [ 300, 500, 100 ]
  // } ];
  // public pieChartLegend = true;
  // public pieChartPlugins = [];

  Portfoliodata : any;
  constructor(private dataService : MockDataService) { 
    }
  ngOnInit(): void {
    this.dataService.getPortfolio().subscribe(response => {
      this.Portfoliodata = response;
  });
  console.log(this.Portfoliodata[0].stock.length);
}
}