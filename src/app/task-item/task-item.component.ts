import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task'
import { Router } from '@angular/router';
@Component({
  selector: 'div[task-item]',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}
  @Input()
  item !: Task;
  @Input()
  index !: Number;

  taskDetails(task_id: Number): void {
    this.router.navigate(['/taskDetails/', task_id]);
  }

  ngOnInit() {
  }

}
