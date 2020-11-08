export interface Exercise {
  name: string;
  description: string;
  sets: number;
  reps?: number;
  time?: number;
}

export interface Workout {
  name: string;
  completed: number;
  exercises: Exercise[];
}

export interface User {
  email: string;
  password: string;
  workouts: Workout[];
}
