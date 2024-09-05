import { createAction, props } from '@ngrx/store';
import { ICurrentUser, IRegisterRequest } from '@models/index';
import { IBackendError } from '@models/interfaces/backend-error/backend-error';
import { RegisterActionsType } from '../register-actions-types/register-actions-types';

export const registerAction = createAction(
  RegisterActionsType.REGISTER,
  props<{ request: IRegisterRequest }>() // It will send as object 
);

export const registerSuccessAction = createAction(
  RegisterActionsType.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  RegisterActionsType.REGISTER_FAILURE,
  props<{ errors: IBackendError }>()
);
