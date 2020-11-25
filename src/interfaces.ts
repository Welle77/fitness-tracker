export interface Exercise {
  name: string;
  description: string;
  sets: number;
  reps?: number;
  time?: number;
  Workout: string;
}

export interface Workout {
  name: string;
  _id: string;
  completed: number;
  exercises: Exercise[];
}

export interface User {
  email: string;
  password: string;
  workouts: Workout[];
}
