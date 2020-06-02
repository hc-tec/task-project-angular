import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  routeToTaskAdder(): void {
    this.router.navigate(['/taskAdder']);
  }
  ngOnInit() {
  }

}
