import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { HttpService } from '../requests/http.service';
import { tokenName } from '@angular/compiler';

const current_user = 'current_user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<{ token: string }>;
  itemValue = new Subject<string>();

  constructor(private router: Router, private httpService: HttpService) {
    console.log('LocalStorage: ', localStorage);
    this.currentUserSubject = new BehaviorSubject<{ token: string }>(
      JSON.parse(localStorage.getItem(current_user)!) ?? ''
    );
    console.log('herfra: ', JSON.parse(localStorage.getItem(current_user)!));
  }

  public get currentUserValue(): { token: string } {
    return this.currentUserSubject.value;
  }

  get currentUser() {
    return localStorage.getItem(current_user);
  }

  loginFromSignup(user: string) {
    localStorage.setItem(current_user, JSON.stringify(user!));
    this.itemValue.next(user);
    this.router.navigate(['']);
  }

  login(email: string, password: string) {
    if (email && password) {
      this.httpService.login(email, password).subscribe((loginUser) => {
        console.log('jwt: ', loginUser.token);
        this.saveToken(loginUser.token);
        this.itemValue.next(loginUser.token);
        this.currentUserSubject.next({ token: loginUser });
        console.log('currentuser: ', this.currentUserSubject);
        this.router.navigate(['/create']);
      });
    }
  }

  register(email: string, password: string) {
    if (email && password) {
      this.httpService.register(email, password).subscribe((data) => {
        console.log('from signUP: ', data);
        this.router.navigate(['/login']);
      });
    }
  }

  private saveToken(token: string) {
    window.localStorage['fitness-token'] = token;
  }

  public getToken(): string {
    if (window.localStorage['fitness-token']) {
      return window.localStorage['fitness-token'];
    } else {
      return '';
    }
  }

  logout() {
    // remove user from local storage to log user out
    console.log('logging you out');
    localStorage.removeItem('fitness-token');
    this.itemValue.next('');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  public isTokenValid() {
    return dayjs().isBefore(this.getExpiration());
  }

  private getExpiration() {
    const token = localStorage.getItem(current_user);

    if (token) {
      const decodedToken: {
        email: string;
        id: string;
        nbf: number;
        exp: number;
        iat: number;
      } = jwt_decode(token);
      return dayjs.unix(decodedToken.exp);
    } else return dayjs().add(-1, 'day');
  }
}
