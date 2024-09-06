import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService, LocalStorageService } from '@services/index';
import { ICurrentUser } from '@models/index';

import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../current-user-actions/current-user-actions';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.localStorageService.getItem('accessToken');
       
        if (!token) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(
              getCurrentUserFailureAction()
            );
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService ,
       private localStorageService: LocalStorageService,
 ) {}
}
