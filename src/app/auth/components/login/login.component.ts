import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { AuthService } from '@auth/services/auth.service';
import { MyValidators } from '@utils/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      this.authService.login(email, password)
      .then(data => {
        this.router.navigate(['/cms']);
      })
      .catch(error => {
        console.error(error);
        this.openMessage(error.message);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(8)]],
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  private openMessage(message: string) {
    this.matSnackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }

}
