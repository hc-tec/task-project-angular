import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task'
@Component({
  selector: 'task-day',
  templateUrl: './task-day.component.html',
  styleUrls: ['./task-day.component.css']
})
export class TaskDayComponent implements OnInit {
  @Input()
  public task_day_component!: Task;
  constructor() { }

  ngOnInit() {
  }

}
