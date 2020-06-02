import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'neumorphic-input',
  templateUrl: './neumorphic-input.component.html',
  styleUrls: ['./neumorphic-input.component.css']
})
export class NeumorphicInputComponent implements OnInit {
  @Input()
  label?: String;
  @Input()
  value?: String;
  @Input()
  placeholder?: String;
  @Input()
  type?: String;

  public tmp_value?: String = this.value = '';

  @Output()
  public valueChangeEmitter = new EventEmitter<string>();

  constructor() { }



  ngOnInit() {
    this.type = 'text';
    this.placeholder = '';
  }

}
