import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { IBackendError } from '@models/index';
import { loginAction } from 'src/app/@core/state/auth/login/login-actions/login-actions';
import {
  loginIsSubmittingSelector,
  loginValidationErrorsSelector,
} from 'src/app/@core/state/auth/login/login-selectors/login-selectors';
import loginComponentImports from './login.component.imports';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [loginComponentImports],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendError | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(loginIsSubmittingSelector));
    this.backendErrors$ = this.store.pipe(
      select(loginValidationErrorsSelector)
    );
  }
  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: any = { user: this.form.value };
    this.store.dispatch(loginAction({ request }));
  }
}
