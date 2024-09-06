import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../widgets/header/header.component';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from 'src/app/@core/state/auth/current-user/current-user-actions/current-user-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements like <app-top>
})
export class AppComponent {
  title = 'angular-folder-structure-base-v18';
  constructor(private store: Store) {
    this.store.dispatch(getCurrentUserAction());
  }
}
