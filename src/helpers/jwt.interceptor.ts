import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/services/AUTH/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    console.log('intercepted');
    console.log('localstorage:', this.authenticationService.getToken());
    const currentUser = this.authenticationService.getToken();
    const isLoggedIn = currentUser;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    console.log('IsLoggedIn: ', isLoggedIn);
    console.log(isLoggedIn && isApiUrl);
    /*if (isLoggedIn && isApiUrl) {*/
    const authHeader = 'Bearer ' + this.authenticationService.getToken();
    console.log('Bearer ' + authHeader);
    request = request.clone({ setHeaders: { Authorization: authHeader } });
    /*  } */
    return next.handle(request);
  }
}
