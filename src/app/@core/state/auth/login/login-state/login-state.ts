import { IBackendError, ICurrentUser } from '@models/index';

export interface ILoginState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendError | null;
}
