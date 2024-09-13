import { NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilsService } from '@utilities/index';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [NgFor, RouterLink, NgClass],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps!: number;
  @Input('limit') limitProps!: number;
  @Input('currentPage') currentPageProps!: number;
  @Input('url') urlProps!: string;

  count!: number;
  pages!: number[];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.count = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.count);
  }
}
