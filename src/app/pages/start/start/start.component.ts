import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Exercise, Workout } from 'src/interfaces';
import { HttpService } from 'src/services/requests/http.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class StartComponent implements OnInit {
  dataSource = [];
  columnsToDisplay = ['name'];
  displayedColumns: string[] = ['name', 'description', 'sets', 'reps', 'time'];
  expandedElement: Exercise | null;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
   this.getWorkouts
  }

  private getWorkouts() {
    this.httpService.getWorkouts().subscribe(
      data => {
        this.dataSource = data['workouts']
    });
  }
}
