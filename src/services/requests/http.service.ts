import { Injectable } from '@angular/core';
import { Exercise, User, Workout } from 'src/interfaces';
import { createWorkout, getWorkout } from 'src/controllers/workoutController.js'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})

export class HttpService {
  constructor( private http: HttpClient) {}

  workouts: Workout[];
  private baseUrl = 'http://localhost:4200';


  public getUser = (): User => {
    return {
      email: 'user@email.com',
      password: 'Passw0rd!',
      workouts: from(this.getWorkouts())
    };
  }

  public getWorkouts(): Observable<Workout[]> {
    const url = `${this.baseUrl}/workouts`
    return this.http.get<Workout[]>(url, {
      headers: new HttpHeaders().set('Authorization', 'Bearer' + this.authentication.getToken())
    })
      .pipe(catchError(this.handleError<Workout[]>('getWorkouts', []))
    );;
  };

  public createWorkout(workout: Workout): Observable<Workout>{
  const url = `${this.baseUrl}/workouts`;
  return this.http.post<Workout>(url,workout)
}

  public getExercises(): Observable<Exercise[]> {
    const url = `${this.baseUrl}/exercises`
    return this.http.get<Exercise[]>(url)
      .pipe(catchError(this.handleError<Exercise[]>('getExercises', []))
      );
  } 

  public createExercise(exercise: Exercise): Observable<Exercise>{
    const url = `${this.baseUrl}/exercises`
    return this.http.post<Exercise>(url,exercise);
  }

  showWorkout(id: string): Observable<Workout> {
    const url = `${this.baseUrl}/exercises/${id}`;
    return this.http.get<Workout>(url).pipe(
      catchError(this.handleError<Workout>(`showWorkout id=${id}`))
    );
  }

  public getWorkoutsForUser = (): Workout[] => {
    return getWorkout;
  };


/**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  // TODO: send the error to remote logging infrastructure
  console.error(error); // log to console instead
  // Let the app keep running by returning an empty result.
  return of(result as T);
  };

}
  }
 
