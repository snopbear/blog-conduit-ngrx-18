import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { RegisterReducer } from './@core/state/auth/register/register-reducers/register.reducers';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { RegisterEffect } from './@core/state/auth/register/register-effects/register.effects';
import { LoginEffect } from './@core/state/auth/login/login-effects/login-effects';
import { LoginReducer } from './@core/state/auth/login/login-reducers/login-reducers';
import { GetCurrentUserEffect } from './@core/state/auth/current-user/current-user-effects/current-user-effects';
import { AuthInterceptor } from './@core/interceptors/auth/authorization-interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([AuthInterceptor])
    ),
    provideStore(),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

    provideEffects([RegisterEffect]),
    provideState({ name: 'register', reducer: RegisterReducer }),

    provideEffects([LoginEffect]),
    provideState({ name: 'login', reducer: LoginReducer }),

    provideEffects([GetCurrentUserEffect]),
    provideState({ name: 'login', reducer: LoginReducer }),
  ],
};
