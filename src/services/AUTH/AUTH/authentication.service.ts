import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { HttpErrorResponse } from '@angular/common/http';

const current_user = 'current_user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private router: Router, private loginMutationService: any) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem(current_user)!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  loginFromSignup(user: any) {
    localStorage.setItem(current_user, JSON.stringify(user!));
    this.currentUserSubject.next(user);
    this.router.navigate(['']);
  }

  login(data: any) {
    if (data && data.email && data.password) {
      this.loginMutationService
        .mutate({ request: { email: data.email, password: data.password } })
        .subscribe(
          ({ data }) => {
            const { loginUser } = data!;
            localStorage.setItem(current_user, JSON.stringify(loginUser));
            this.currentUserSubject.next(loginUser);
            this.router.navigate(['']);
          },
          (error: HttpErrorResponse) => {
            if (error.message.includes('credentials'))
              alert('Wrong username or password');
            else alert('something went wrong, please try again later');
          }
        );
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
