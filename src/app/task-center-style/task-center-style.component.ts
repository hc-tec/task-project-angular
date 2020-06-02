import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-center-style',
  templateUrl: './task-center-style.component.html',
  styleUrls: ['./task-center-style.component.css']
})
export class TaskCenterStyleComponent implements OnInit {
  @Input()
  public date_title!: String;
  @Input()
  public date_descrption!: String;
  constructor() { }

  ngOnInit() {
  }

}
