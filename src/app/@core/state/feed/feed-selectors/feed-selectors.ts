import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeedState } from '../feed-state/feed-state';

export const feedFeatureSelector = createFeatureSelector<IFeedState>('feed');

// Selector to determine if submitting
export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.isLoading
);
 
export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.error
);
 
export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.data
);
 