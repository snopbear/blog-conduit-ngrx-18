import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IBackendError } from '@models/index';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  standalone:true,
  imports: [NgFor]
})
export class BackendErrorMessagesComponent implements OnInit {

  @Input('backendErrors') backendErrors!: IBackendError;
  errorMessages!: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}