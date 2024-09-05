import { Routes } from '@angular/router';
import { LoginComponent } from './@feature/auth';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./@feature/home/home.component').then(
        (x) => x.HomeComponent
      ),
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./@feature/auth/login/login.component').then(
        (x) => x.LoginComponent
      ),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./@feature/auth/register/register.component').then(
        (x) => x.RegisterComponent
      ),
  },
];
