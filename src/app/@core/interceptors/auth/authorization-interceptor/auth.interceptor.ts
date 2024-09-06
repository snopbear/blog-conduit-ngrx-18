import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { LocalStorageService } from '@services/index';

export const AuthInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  debugger
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getItem('accessToken');

  const clonedReq = req.clone({
    setHeaders: {
      accept: 'application/json',
      Authorization: token ? `Token ${token}` : '',
    },
  });

  return next(clonedReq);

  return next(req);
};
