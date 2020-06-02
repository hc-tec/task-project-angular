import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Task } from '../task'
import { TaskService } from '../task.service'
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public item !: Task;
  private index !: number;
  constructor(
    private TaskService: TaskService,
    private route: ActivatedRoute,
  ) { }

  public finishTask(): void {
    this.TaskService.finishItem(this.index);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const index: number = +params.get('taskIndex');
        this.index = index;
        this.item = this.TaskService.getItems()[index]
      }
    )
  }

}
