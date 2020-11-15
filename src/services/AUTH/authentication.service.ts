import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { HttpService } from '../requests/http.service';
import { tokenName } from '@angular/compiler';

const current_user = 'current_user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<{ token: string }>;
  public currentUser: Observable<{ token: string }>;

  constructor(private router: Router, private httpService: HttpService) {
    this.currentUserSubject = new BehaviorSubject<{ token: string }>(
      JSON.parse(localStorage.getItem(current_user)!) ?? ''
    );
    console.log(JSON.parse(localStorage.getItem(current_user)!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): { token: string } {
    return this.currentUserSubject.value;
  }

  loginFromSignup(user: string) {
    localStorage.setItem(current_user, JSON.stringify(user!));
    this.currentUserSubject.next({ token: user });
    this.router.navigate(['']);
  }

  login(email: string, password: string) {
    if (email && password) {
      this.httpService.login(email, password).subscribe((loginUser) => {
        localStorage.setItem(current_user, JSON.stringify(loginUser));
        this.currentUserSubject.next({ token: loginUser });
        console.log(this.currentUserValue);
        this.router.navigate(['']);
      });
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(current_user);
    this.currentUserSubject.next(null);
    this.router.navigate['/'];
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
