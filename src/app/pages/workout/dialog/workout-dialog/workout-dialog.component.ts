import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/services/requests/http.service';
import { Workout } from 'src/interfaces';

@Component({
  selector: 'app-workout-dialog',
  templateUrl: './workout-dialog.component.html',
  styleUrls: ['./workout-dialog.component.scss'],
})
export class WorkoutDialogComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  public workoutForm = this.formbuilder.group({
    workoutName: new FormControl('', Validators.required),
  });

  get workoutName() {
    return this.workoutForm.get('workoutName');
  }

  public onSubmit = () => {
    const workout: Workout = {
      name: this.workoutName.value,
      completed: 0,
      _id: '',
      exercises: [],
    };
    this.httpService.createWorkout(workout).subscribe((data) => {
      this.httpService.getWorkouts().subscribe();
      location.reload();
    });
  };
}
