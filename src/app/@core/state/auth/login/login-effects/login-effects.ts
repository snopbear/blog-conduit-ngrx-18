import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';

import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '@services/module-services/auth/auth-service/auth.service';
import { ICurrentUser } from '@models/index';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '@services/core-services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { loginAction, loginSuccessAction, loginFailureAction } from '../login-actions/login-actions';

@Injectable()
export class LoginEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        debugger;
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.localStorageService.setItem('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          debugger
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
}
