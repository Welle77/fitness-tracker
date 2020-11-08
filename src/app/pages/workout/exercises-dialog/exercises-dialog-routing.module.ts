import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesDialogComponent } from './exercises-dialog.component';

const routes: Routes = [{ path: '', component: ExercisesDialogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesDialogRoutingModule { }
