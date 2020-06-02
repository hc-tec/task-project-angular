import { Injectable } from '@angular/core';
import { taskList } from './task-list'
import { Task } from './task'
import { getTimeStr } from './func'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Array<Task> = taskList;

  getItems(): Array<Task> {
    return this.taskList;
  }

  addItem(item: Task): void {
    this.taskList.push(item);
  }

  finishItem(item_id: number): void {
    const today = new Date();
    this.taskList[item_id].task_finish_day = getTimeStr(today, 'day');
  }

constructor() { }

}
