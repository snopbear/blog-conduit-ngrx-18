import { Component, OnInit } from '@angular/core';
import { GlobalFeedComponent } from '../global-feed/global-feed.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [GlobalFeedComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
