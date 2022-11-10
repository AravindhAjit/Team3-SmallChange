import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  pieChartSeries: ApexNonAxisChartSeries = [20000,15000,35000];
  pieChartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  pieChartLabels = ["Stock", "Govt", "CD"];

  pieChartTitle: ApexTitleSubtitle = {
    text: 'Trades By Category',
    align: 'center'
  };

  pieChartDataLabels: ApexDataLabels = {
    enabled: true
  };
  barChartSeries1 : ApexAxisChartSeries = [
    {
      name: "quantity",
      data: [150,122,119,102,100]
    }
  ];
  barChart1: ApexChart = {
    height: 350,
    type: "bar"
  };
  barCharttitle1: ApexTitleSubtitle = {
    text: "Top 5 trades by quantity",
    align: 'center'
  };
  barChartxaxis1: ApexXAxis = {
    categories: ["JPMorgan Chase & Co. Capital Stock","Berkshire Hathaway Inc. Class A","USA, Notes 2.5% 15jan2022 3Y","Tesla, Inc. Common Stockc","USA, Bond 3 15aug2048 30Y"]
  };

  barChartSeries2 : ApexAxisChartSeries = [
    {
      name: "Cash-Value",
      data: [45000,32000,20000,15000,13000]
    }
  ];
  barChart2: ApexChart = {
    height: 350,
    type: "bar"
  };
  barCharttitle2: ApexTitleSubtitle = {
    text: "Top 5 trades by total cash value",
    align: 'center'
  };
  barChartxaxis2: ApexXAxis = {
    categories: ["JPMorgan Chase & Co. Capital Stock","Berkshire Hathaway Inc. Class A","USA, Notes 2.5% 15jan2022 3Y","Tesla, Inc. Common Stockc","USA, Bond 3 15aug2048 30Y"]
  };


  constructor() { }

  ngOnInit(): void {
  }

}








//   constructor() { }

//   ngOnInit(): void {
//   }

// }
