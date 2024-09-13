import { Action, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../feed-state/feed-state';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../feed-actions/feed-actions';
import { routerNavigatedAction, routerNavigationAction } from '@ngrx/router-store';

const initialState: IFeedState = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    routerNavigationAction,
    (): IFeedState => initialState
  )
);



export function FeedReducer(state: any, action: Action) {
  return feedReducer(state, action);
}
