import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    {'image': '../../../assets/port.jpg'}, 
    {'image': '../../../assets/activity.jpg'},
    {'image': '../../../assets/trading.jpeg'}, 
    {'image': '../../../assets/pref.jpg'}, 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
