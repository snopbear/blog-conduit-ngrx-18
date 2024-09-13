import { Action, createReducer, on } from '@ngrx/store';

import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/@core/state/auth/login/login-actions/login-actions';
import { IAuthState } from '../../auth-state/auth-state';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../current-user-actions/current-user-actions';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  isLoading: false,
  validationErrors: null,
};

// reducer is the function that change our state some how

const getCurrentUserReducer = createReducer(
  initialState,
  on(getCurrentUserAction, (state: IAuthState) => ({
    ...state,
    isLoading: true,
  })),
  on(
    getCurrentUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true, //set to true when registration success,
      currentUser: action.currentUser, //set user details
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

// previous case it will work just in time compilation
// which mean in dev process but it will not work in out build
// so when we build angular this a head of time compilation

export function CurrentUserReducer(state: any, action: Action) {
  return getCurrentUserReducer(state, action);
}
