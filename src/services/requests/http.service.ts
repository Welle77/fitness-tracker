import { Injectable } from '@angular/core';
import { Exercise, User, Workout } from 'src/interfaces';
import { createWorkout, getWorkout } from 'src/controllers/workoutController.js'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  public getUser = (): User => {
    return {
      email: 'user@email.com',
      password: 'Passw0rd!',
      workouts: this.getWorkouts(),
    };
  };

  public getWorkouts = (): Workout[] => {
    return [
      {
        name: 'Workout 1',
        completed: 12,
        exercises: this.getExercises(),
      },
      {
        name: 'Workout 2',
        completed: 2,
        exercises: this.getExercises(),
      },
      {
        name: 'Workout 3',
        completed: 34,
        exercises: this.getExercises(),
      },
    ];
  };

  public getWorkoutsForUser = (): Workout[] => {
    return getWorkout;
  };

  public getExercises = (): Exercise[] => {
    return [
      {
        name: 'Exercise 1',
        sets: 12,
        time: 10,
        description: 'this is Exercise 1',
      },
      {
        name: 'Exercise 2',
        sets: 22,
        reps: 23,
        description: 'this is Exercise 2',
      },
      {
        name: 'Exercise 3',
        sets: 2,
        time: 3,
        reps: 12,
        description: 'this is Exercise 3',
      },
    ];
  };
}
