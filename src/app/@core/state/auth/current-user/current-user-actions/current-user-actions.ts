import { createAction, props } from "@ngrx/store";
import { UserActionsType } from "../current-user-types/current-user-types";
import { ICurrentUser } from "@models/index";

export const getCurrentUserAction = createAction(
  UserActionsType.GET_CURRENT_USER // It will send as object
);
export const getCurrentUserSuccessAction = createAction(
  UserActionsType.GET_CURRENT__USER_SUCCESS ,
  props<{ currentUser: ICurrentUser }>() // It will send as object
);
export const getCurrentUserFailureAction = createAction(
  UserActionsType.GET_CURRENT__USER_FAILURE // It will send as object
);
