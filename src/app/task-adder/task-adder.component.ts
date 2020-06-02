import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task'
@Component({
  selector: 'task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.css']
})
export class TaskAdderComponent implements OnInit {

  constructor(
    private TaskService: TaskService,
  ) { }

  public task: Task = {
    task_title: '',
    task_start_day: '',
    task_end_day: '',
    task_description: '',
    task_finish_day: '',
  }

  public task_fields: Array<Object> = [
    {
      label: '任务名称',
      value: this.task.task_title,
      // 这里需要注意 taskTitleChange 方法中的 this 会被改变成此对象
      // 所以需要更换 this，使其指向这个类
      valueChangeMethod: this.taskTitleChange.bind(this),
    },
    {
      label: '开始时间',
      value: this.task.task_start_day,
      valueChangeMethod: this.taskStartDayChange.bind(this),
    },
    {
      label: '结束时间',
      value: this.task.task_end_day,
      valueChangeMethod: this.taskEndDayChange.bind(this),
    },
    {
      label: '任务描述',
      value: this.task.task_description,
      valueChangeMethod: this.taskDescriptionChange.bind(this),
    }
  ]

  private taskTitleChange(newValue: String): void {
    this.task.task_title = newValue;
  }

  private taskStartDayChange(newValue: String): void {
    this.task.task_start_day = newValue;
  }

  private taskEndDayChange(newValue: String): void {
    this.task.task_end_day = newValue;
  }

  private taskDescriptionChange(newValue: String): void {
    this.task.task_description = newValue;
  }

  addTask(): void {
    this.TaskService.addItem(this.task);
    alert('任务添加成功');
  }

  ngOnInit() {
  }

}
