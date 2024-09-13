import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../feed-actions/feed-actions";
import { IFeedResponse } from "@models/index";
import { FeedService } from "@services/index";


@Injectable()
export class FeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feedResponse: IFeedResponse) => {
            return getFeedSuccessAction({ feed: feedResponse });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
