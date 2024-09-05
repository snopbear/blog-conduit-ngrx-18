import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService, LocalStorageService } from '@services/index';
import { ICurrentUser } from '@models/index';
import { Router } from '@angular/router';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/@core/state/auth/register/register-actions/register.actions';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.localStorageService.setItem('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false}
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
}
