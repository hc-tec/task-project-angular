import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { NeumorphicBtnComponent } from './neumorphic-btn/neumorphic-btn.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDayComponent } from './task-day/task-day.component';
import { TaskDayInfoComponent } from './task-day-info/task-day-info.component';
import { NeumorphicLabelComponent } from './neumorphic-label/neumorphic-label.component';
import { TaskCenterStyleComponent } from './task-center-style/task-center-style.component';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { NeumorphicInputComponent } from './neumorphic-input/neumorphic-input.component';
import { ForwordBackBtnComponent } from './forword-back-btn/forword-back-btn.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      TaskPageComponent,
      TaskComponent,
      TaskItemComponent,
      NeumorphicBtnComponent,
      TaskDetailsComponent,
      TaskDayComponent,
      TaskDayInfoComponent,
      NeumorphicLabelComponent,
      TaskCenterStyleComponent,
      TaskAdderComponent,
      NeumorphicInputComponent,
      ForwordBackBtnComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
