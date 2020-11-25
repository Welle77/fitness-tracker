import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/services/AUTH/authentication.service';
import { HttpService } from 'src/services/requests/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  public signupForm = this.formbuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  public onSubmit = () => {
    console.log(this.email.value);
    console.log(this.password.value);
    this.authService.login(this.email.value, this.password.value) ;
  };

  public getErrorMessage = () => {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  };

  ngOnInit(): void {}
}

const strongRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);
