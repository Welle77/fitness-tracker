import { Injectable } from '@angular/core';
import { Exercise, User, Workout } from 'src/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../AUTH/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  workouts: Workout[];
  private baseUrl = 'http://localhost:3000';

  public getUser(): Observable<User> {
    const url = `${this.baseUrl}/user`;
    return this.http.get<User>(url);
  }

  public getWorkouts(): Observable<Workout[]> {
    const url = `${this.baseUrl}/workouts`;
    return this.http.get<Workout[]>(url);
  }

  public createWorkout(workout: Workout): Observable<Workout> {
    const url = `${this.baseUrl}/workouts`;
    return this.http.post<Workout>(url, workout);
  }

  public getExercises(): Observable<Exercise[]> {
    const url = `${this.baseUrl}/exercises`;
    return this.http.get<Exercise[]>(url);
  }

  public createExercise(exercise: Exercise): Observable<Exercise> {
    console.log('createExercise called');
    const url = `${this.baseUrl}/exercises`;
    console.log('url:', url);
    console.log(exercise);
    return this.http.post<Exercise>(url, exercise);
  }

  showWorkout(id: string): Observable<Workout> {
    const url = `${this.baseUrl}/exercises/${id}`;
    return this.http.get<Workout>(url);
  }

  public login(email: string, password: string) {
    const url = `${this.baseUrl}/login`;
    console.log(url);
    return this.http.post<any>(url, { email: email, password: password });
  }

  public register(email: string, password: string) {
    const url = `${this.baseUrl}/register`;
    console.log(url);
    return this.http.post<any>(url, {
      name: email,
      email: email,
      password: password,
    });
  }

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
