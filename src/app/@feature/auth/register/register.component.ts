import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { registerAction } from 'src/app/@core/state/auth/register/register-actions/register.actions';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/@core/state/auth/register/register-selectors/register.selectors';
import { IBackendError } from '@models/index';
import { BackendErrorMessagesComponent } from 'src/app/@shared/components/backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
    BackendErrorMessagesComponent,
  ],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  // backendErrors$!: Observable<IBackendError>;
  backendErrors$!: Observable<IBackendError | null>;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: any = { user: this.form.value };
    this.store.dispatch(registerAction({ request }));
  }
}
