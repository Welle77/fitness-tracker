import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/interfaces';
import { AuthenticationService } from 'src/services/AUTH/authentication.service';
import { HttpService } from 'src/services/requests/http.service';

@Component({
  selector: 'app-log-workout',
  templateUrl: './log-workout.component.html',
  styleUrls: ['./log-workout.component.scss'],
})
export class LogWorkoutComponent implements OnInit {
  workouts: Workout[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getWorkouts().subscribe((data) => {
      this.workouts = data;
    });
  }

  public onLog = (wtf) => {
    console.log('wtf: ', wtf);
    this.httpService.logWorkout(wtf).subscribe((data) => {
      location.reload();
    });
  };
}
