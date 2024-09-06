import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../../auth-state/auth-state';


export const authFeatureSelector = createFeatureSelector<IAuthState>('register');

// Selector to determine if submitting
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.validationErrors
);