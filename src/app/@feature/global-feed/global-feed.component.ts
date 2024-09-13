import { Component, OnInit } from '@angular/core';
import { FeedComponent } from 'src/app/@shared/components/feed/feed.component';
import { BannerComponent } from 'src/app/@shared/components/banner/banner.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  standalone: true,
  imports: [FeedComponent, BannerComponent],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles';

  constructor() {}

  ngOnInit() {}
}
