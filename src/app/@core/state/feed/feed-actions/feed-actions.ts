import { createAction, props } from "@ngrx/store";
import { FeedActionsType } from "../feed-types/feed-types";
import { IFeedResponse } from "@models/index";

export const getFeedAction=createAction(
    FeedActionsType.GET_FEED,
    props<{url:string}>()
)
export const getFeedSuccessAction=createAction(
    FeedActionsType.GET_FEED_SUCCESS,
    props<{feed:IFeedResponse}>()
)
export const getFeedFailureAction=createAction(
    FeedActionsType.GET_FEED_FAILURE
)