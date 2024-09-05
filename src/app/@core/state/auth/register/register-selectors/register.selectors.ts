import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRegisterState } from 'src/app/@core/state/auth/register/register-state/register-state.interface';


export const authFeatureSelector = createFeatureSelector<IRegisterState>('register');

// Selector to determine if submitting
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: IRegisterState) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: IRegisterState) => state.validationErrors
);