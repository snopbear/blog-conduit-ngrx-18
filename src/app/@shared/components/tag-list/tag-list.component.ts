import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ITag } from '@models/index';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class TagListComponent {
  @Input('tags') tags!: string[];
}
