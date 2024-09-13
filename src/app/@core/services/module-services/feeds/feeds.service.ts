import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFeedResponse } from '@models/index';
import { Observable } from 'rxjs';
import { environment } from 'src/app/@constants/const-variables';

@Injectable({
providedIn:'root'
}
)
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<IFeedResponse> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<IFeedResponse>(fullUrl);
  }
}