import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPageComponent } from './task-page/task-page.component'
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TaskAdderComponent } from './task-adder/task-adder.component'
const routes: Routes = [
  {
    path: '',
    component: TaskPageComponent
  },
  {
    path: 'taskAdder',
    component: TaskAdderComponent
  },
  {
    path: 'taskDetails/:taskIndex',
    component: TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
