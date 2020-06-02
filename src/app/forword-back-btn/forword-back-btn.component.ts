import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'forword-back-btn',
  templateUrl: './forword-back-btn.component.html',
  styleUrls: ['./forword-back-btn.component.css']
})
export class ForwordBackBtnComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }
  back(): void {
    this.location.back();
  }
  forward(): void {
    this.location.forward();
  }
  ngOnInit() {
  }

}
