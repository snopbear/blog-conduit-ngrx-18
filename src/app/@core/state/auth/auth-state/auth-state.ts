import { IBackendError, ICurrentUser } from "@models/index";

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  isLoading: boolean;
  validationErrors: IBackendError | null;
}
