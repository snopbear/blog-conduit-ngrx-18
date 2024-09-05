import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginState } from '../login-state/login-state';
export const loginFeatureSelector = createFeatureSelector<ILoginState>('login');

// Selector to determine if submitting
export const loginIsSubmittingSelector = createSelector(
  loginFeatureSelector,
  (state: ILoginState) => state.isSubmitting
);

export const loginValidationErrorsSelector = createSelector(
  loginFeatureSelector,
  (state: ILoginState) => state.validationErrors
);
