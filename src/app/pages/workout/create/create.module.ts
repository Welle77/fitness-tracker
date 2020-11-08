import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ExercisesDialogComponent } from '../exercises-dialog/exercises-dialog.component';
import { WorkoutDialogComponent } from '../dialog/workout-dialog/workout-dialog.component';

@NgModule({
  declarations: [
    CreateComponent,
    ExercisesDialogComponent,
    WorkoutDialogComponent,
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class CreateModule {}
