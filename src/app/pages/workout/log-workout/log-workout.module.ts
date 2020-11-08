import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogWorkoutRoutingModule } from './log-workout-routing.module';
import { LogWorkoutComponent } from './log-workout.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LogWorkoutComponent],
  imports: [
    CommonModule,
    LogWorkoutRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class LogWorkoutModule {}
