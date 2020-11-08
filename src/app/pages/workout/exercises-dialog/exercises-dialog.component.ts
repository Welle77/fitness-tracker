import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workout } from 'src/interfaces';

@Component({
  selector: 'app-exercises-dialog',
  templateUrl: './exercises-dialog.component.html',
  styleUrls: ['./exercises-dialog.component.scss'],
})
export class ExercisesDialogComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { workout: Workout }
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
    console.log('add exercise');
  };
}
