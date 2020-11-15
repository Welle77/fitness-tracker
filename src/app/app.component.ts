import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/AUTH/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentUser: boolean;

  title = 'fitness-tracker';

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(({ token }) => {
      this.currentUser = token != '';
    });
  }
}
