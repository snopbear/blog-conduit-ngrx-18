import { Action, createReducer, on } from '@ngrx/store';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/@core/state/auth/register/register-actions/register.actions';

import { IAuthState } from '../../auth-state/auth-state';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false
};

// reducer is the function that change our state some how

const registerReducer = createReducer(
  initialState,
  on(registerAction, (state: IAuthState) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null, //set in to null in case we submit
  })),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true, //set to true when registration success,
      currentUser: action.currentUser, //set user details
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors, //set error details if registration failed
    })
  )
);

// previous case it will work just in time compilation
// which mean in dev process but it will not work in out build
// so when we build angular this a head of time compilation

export function RegisterReducer(state: any, action: Action) {
  return registerReducer(state, action);
}
