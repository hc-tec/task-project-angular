import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'neumorphic-btn',
  templateUrl: './neumorphic-btn.component.html',
  styleUrls: ['./neumorphic-btn.component.css']
})
export class NeumorphicBtnComponent implements OnInit {
  @Input()
  circle!: Boolean;

  btn_class: Object = {
    'neumorphic-btn': true,
    'neumorphic-btn-circle': this.circle,
  }

  @Output()
  clickEventEmitter: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
    // this.circle = false;
  }

}
