import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ICurrentUser,
  IRegisterRequest,
  IAuthResponse,
  ILoginRequest,
} from '@models/index';
import { environment } from 'src/app/@constants/const-variables';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  extractUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    return this.httpClient
      .post<IAuthResponse>(`${environment.apiUrl}/users`, data)
      .pipe(map(this.extractUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    return this.httpClient
      .post<IAuthResponse>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.extractUser));
  }


  getUser():Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/user`;
    return this.httpClient.get<IAuthResponse>(url).pipe(map(this.extractUser));
  }

  // updateUser(data: UserInput): Observable<User> {
  //   const url = environment.apiUrl + '/user';
  //   return this.httpClient.put(url, data).pipe(map(this.extractUser));
  // }
}
