import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'
import { Task } from '../task'
@Component({
  selector: 'div[task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(
    private TaskService: TaskService
  ) { }

  getItems(): Array<Task> {
    return this.TaskService.getItems()
  }

  ngOnInit() {
  }

}
