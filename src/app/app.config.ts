import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { NavigationActionTiming, provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { RegisterReducer } from './@core/state/auth/register/register-reducers/register.reducers';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { RegisterEffect } from './@core/state/auth/register/register-effects/register.effects';
import { LoginEffect } from './@core/state/auth/login/login-effects/login-effects';
import { LoginReducer } from './@core/state/auth/login/login-reducers/login-reducers';
import { CurrentUserEffect } from './@core/state/auth/current-user/current-user-effects/current-user-effects';
import { AuthInterceptor } from './@core/interceptors/auth/authorization-interceptor/auth.interceptor';
import { FeedEffect } from './@core/state/feed/feed-effects/feed-effects';
import { CurrentUserReducer } from './@core/state/auth/current-user/current-user-reducers/current-user-reducers';
import { FeedReducer } from './@core/state/feed/feed-reducers/feed-reducers';
import { CustomSerializer } from './@router-store-config/custom-route-serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([AuthInterceptor])),
    provideStore(),
    provideRouterStore(),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

    provideEffects([RegisterEffect]),
    provideState({ name: 'register', reducer: RegisterReducer }),

    provideEffects([LoginEffect]),
    provideState({ name: 'login', reducer: LoginReducer }),

    provideEffects([CurrentUserEffect]),
    provideState({ name: 'currentUser', reducer: CurrentUserReducer }),

    provideEffects([FeedEffect]),
    provideState({ name: 'feed', reducer: FeedReducer }),
  ],
};
