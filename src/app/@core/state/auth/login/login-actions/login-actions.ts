import { createAction, props } from '@ngrx/store';
import { ICurrentUser, ILoginRequest, IRegisterRequest } from '@models/index';
import { IBackendError } from '@models/index';

import { LoginActionsType } from 'src/app/@core/state/auth/login/login-actions-types/login-actions-types';

export const loginAction = createAction(
  LoginActionsType.LOGIN,
  props<{ request: ILoginRequest }>() // It will send as object
);

export const loginSuccessAction = createAction(
  LoginActionsType.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  LoginActionsType.LOGIN_FAILURE,
  props<{ errors: IBackendError }>()
);
