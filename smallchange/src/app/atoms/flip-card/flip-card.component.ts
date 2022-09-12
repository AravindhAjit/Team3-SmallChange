import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})


export class FlipCardComponent implements OnInit {

  flipped = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
