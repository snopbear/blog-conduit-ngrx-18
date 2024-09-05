import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';



import { IBackendError } from '@models/index';
import { BackendErrorMessagesComponent } from 'src/app/@shared/components/backend-error-messages/backend-error-messages.component';
import { loginAction } from 'src/app/@core/state/auth/login/login-actions/login-actions';
import { loginIsSubmittingSelector, loginValidationErrorsSelector } from 'src/app/@core/state/auth/login/login-selectors/login-selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
    BackendErrorMessagesComponent,
  ],
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
