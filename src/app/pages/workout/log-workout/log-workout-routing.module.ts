import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogWorkoutComponent } from './log-workout.component';

const routes: Routes = [{ path: '', component: LogWorkoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogWorkoutRoutingModule { }
