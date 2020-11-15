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
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    sets: new FormControl('', Validators.required),
    reps: new FormControl(''),
    time: new FormControl(''),
  });

  get name() {
    return this.workoutForm.get('name');
  }
  get workoutName() {
    return this.workoutForm.get('workoutName');
  }

  get description() {
    return this.workoutForm.get('description');
  }
  get sets() {
    return this.workoutForm.get('sets');
  }
  get reps() {
    return this.workoutForm.get('reps');
  }
  get time() {
    return this.workoutForm.get('time');
  }

  public onSubmit = () => {
    const workout: Workout = {
      name: this.workoutName.value,
      completed: 0,
      exercises: [
        {
          description: this.description.value,
          name: this.name.value,
          sets: this.sets.value,
          reps: this.reps.value,
          time: this.time.value,
        },
      ],
    };
    this.httpService.createWorkout(workout).subscribe((data) => {
      this.httpService.getWorkouts();
    });
  };
}
