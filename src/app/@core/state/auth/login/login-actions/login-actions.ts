import { createAction, props } from '@ngrx/store';
import { ICurrentUser, ILoginRequest, IRegisterRequest } from '@models/index';
import { IBackendError } from '@models/interfaces/backend-error/backend-error';
import { LoginActionsType } from '../login-actions-types/login-actions-types';

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
