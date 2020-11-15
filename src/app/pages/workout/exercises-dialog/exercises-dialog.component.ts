import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise, Workout } from 'src/interfaces';
import { HttpService } from 'src/services/requests/http.service';

@Component({
  selector: 'app-exercises-dialog',
  templateUrl: './exercises-dialog.component.html',
  styleUrls: ['./exercises-dialog.component.scss'],
})
export class ExercisesDialogComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { workout: Workout },
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  public exerciseForm = this.formbuilder.group({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    sets: new FormControl('', Validators.required),
    reps: new FormControl(''),
    time: new FormControl(''),
  });

  get name() {
    return this.exerciseForm.get('name');
  }

  get description() {
    return this.exerciseForm.get('description');
  }
  get sets() {
    return this.exerciseForm.get('sets');
  }
  get reps() {
    return this.exerciseForm.get('reps');
  }
  get time() {
    return this.exerciseForm.get('time');
  }

  public onSubmit = () => {
    const exercise: Exercise = {
      description: this.description.value,
      name: this.name.value,
      sets: this.sets.value,
      reps: this.reps.value,
      time: this.time.value,
    };
    this.httpService.createExercise(exercise);
  };
}
