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

  Logout() {
    this.authService.logout();
  }

  constructor(private authService: AuthenticationService) {
    authService.itemValue.subscribe((currentUser) => {
      console.log('entered', currentUser);
      this.currentUser = currentUser != '';
    });
  }

  ngOnInit(): void {
    console.log('inittoken: ', this.authService.getToken());
    this.currentUser = this.authService.getToken() != '';
  }
}
