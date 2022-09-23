import { Component, OnInit } from '@angular/core';
import { Preference } from 'src/app/models/preference';
import { PrefernceService } from 'src/app/service/prefernce.service';

@Component({
  selector: 'app-roboadvisor',
  templateUrl: './roboadvisor.component.html',
  styleUrls: ['./roboadvisor.component.css']
})
export class RoboadvisorComponent implements OnInit {
  preference = new Preference('','','','',false);

  constructor(private service:PrefernceService) {    
    this.preference = this.service.getPreferences();
    console.log(this.preference);
    
  }
  ngOnInit(): void {
  }

}
