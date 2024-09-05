import { Action, createReducer, on } from '@ngrx/store';

import { ILoginState } from 'src/app/@core/state/auth/login/login-state/login-state';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/@core/state/auth/login/login-actions/login-actions';


const initialState: ILoginState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

// reducer is the function that change our state some how

const loginReducer = createReducer(
  initialState,
  on(loginAction, (state: ILoginState) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null, //set in to null in case we submit
  })),
  on(
    loginSuccessAction,
    (state, action): ILoginState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true, //set to true when registration success,
      currentUser: action.currentUser, //set user details
    })
  ),
  on(
    loginFailureAction,
    (state, action): ILoginState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors, //set error details if registration failed
    })
  )
);

// previous case it will work just in time compilation
// which mean in dev process but it will not work in out build
// so when we build angular this a head of time compilation

export function LoginReducer(state: any, action: Action) {
  return loginReducer(state, action);
}
