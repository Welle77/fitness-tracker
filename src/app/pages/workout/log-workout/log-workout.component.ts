import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/interfaces';
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
    this.workouts = this.httpService.getWorkoutsForUser();
  }

  public onLog = (wtf) => {};
}
