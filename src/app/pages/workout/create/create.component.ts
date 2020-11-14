import { Component, OnInit } from '@angular/core';
import { Workout, Exercise } from 'src/interfaces';
import { HttpService } from 'src/services/requests/http.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutDialogComponent } from '../dialog/workout-dialog/workout-dialog.component';
import { ExercisesDialogComponent } from '../exercises-dialog/exercises-dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CreateComponent implements OnInit {
  dataSource=  [];
  columnsToDisplay = ['name'];
  displayedColumns: string[] = ['name', 'description', 'sets', 'reps', 'time'];
  expandedElement: Exercise | null;

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = this.httpService.getWorkouts();
  }

  public onAddWorkoutClicked = () => {
    this.dialog.open(WorkoutDialogComponent);
  };

  public onAddExerciseClicked = (workout: Workout) => {
    this.dialog.open(ExercisesDialogComponent, {
      data: {
        workout: workout,
      },
    });
  };
}
