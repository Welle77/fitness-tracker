import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout-dialog',
  templateUrl: './workout-dialog.component.html',
  styleUrls: ['./workout-dialog.component.scss'],
})
export class WorkoutDialogComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {}

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
    console.log('add workout');
  };
}
