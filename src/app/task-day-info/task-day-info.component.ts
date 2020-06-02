import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-day-info',
  templateUrl: './task-day-info.component.html',
  styleUrls: ['./task-day-info.component.css']
})
export class TaskDayInfoComponent implements OnInit {
  @Input()
  public date_title!: String;
  @Input()
  public date_data!: String;
  constructor() { }

  ngOnInit() {
  }

}
