import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { Trade } from 'src/app/models/trade';
import { ClientService } from 'src/app/service/client.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

 

  govtsize: number;

  constructor(private portfolioservice:PortfolioService,private service:ClientService) { }
  client=this.service.getCurrentClient()
  govt = this.portfolioservice.getgovt()
  stock = this.portfolioservice.getstock()
  cd =this.portfolioservice.getcd()

  govtcashvalue=this.portfolioservice.getcashvalue(this.govt);
  stockcashvalue=this.portfolioservice.getcashvalue(this.stock);
  cdcashvalue=this.portfolioservice.getcashvalue(this.cd);


  topcash = this.portfolioservice.gettop5casj();
  topquant = this.portfolioservice.gettop5quant();

  


  

  ngOnInit(): void {

    console.log(this.govt);
    console.log(this.topquant);
    

    
  }



  pieChartSeries: ApexNonAxisChartSeries = [this.stockcashvalue,this.govtcashvalue,this.cdcashvalue];
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
      name: "cashvalue",
      data: [this.topcash[0].cashValue,this.topcash[1].cashValue,this.topcash[2].cashValue,this.topcash[3].cashValue,this.topcash[4].cashValue]
    }
  ];

  barChart1: ApexChart = {
    height: 350,
    type: "bar"
  };
  barCharttitle1: ApexTitleSubtitle = {
    text: "Top 5 trades by CashValue",
    align: 'center'
  };
  barChartxaxis1: ApexXAxis = {
    categories: [this.topcash[0].instrumentdescription,this.topcash[1].instrumentdescription,this.topcash[2].instrumentdescription,this.topcash[3].instrumentdescription,this.topcash[4].instrumentdescription]
  };

  barChartSeries2 : ApexAxisChartSeries = [
    {
      name: "Cash-Value",
      data: [this.topquant[0].quantity,this.topquant[1].quantity,this.topquant[2].quantity,this.topquant[3].quantity,this.topquant[4].quantity]
    }
  ];
  barChart2: ApexChart = {
    height: 350,
    type: "bar"
  };
  barCharttitle2: ApexTitleSubtitle = {
    text: "Top 5 trades by Quantity",
    align: 'center'
  };
  barChartxaxis2: ApexXAxis = {
    categories: [this.topquant[0].instrumentdescription,this.topquant[1].instrumentdescription,this.topquant[2].instrumentdescription,this.topquant[3].instrumentdescription,this.topquant[4].instrumentdescription]
  };





}








//   constructor() { }

//   ngOnInit(): void {
//   }

// }
