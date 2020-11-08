import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogWorkoutRoutingModule } from './log-workout-routing.module';
import { LogWorkoutComponent } from './log-workout.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [LogWorkoutComponent],
  imports: [CommonModule, LogWorkoutRoutingModule, MatListModule],
})
export class LogWorkoutModule {}
