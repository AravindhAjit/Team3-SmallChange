import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MockDataService } from 'src/app/service/mock-data.service';
import { PriceService } from 'src/app/service/price.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
  instruments:any;

  constructor(private dataService : MockDataService , private  dialogRef : MatDialog, private service:PriceService) {

  }

  ngOnInit(): void {
   this.fetch('')
 }
 fetch(category: string){
   this.service.getInstruments(category).subscribe(data=>{
     this.instruments = data;

   });}

}
