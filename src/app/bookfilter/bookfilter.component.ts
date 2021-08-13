import { Component, Input, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categories } from '../categories';
import { BookService } from './book.service';

@Component({
  selector: 'app-bookfilter',
  templateUrl: './bookfilter.component.html',
  styleUrls: ['./bookfilter.component.scss']
})
export class BookfilterComponent implements OnInit {
  @Input()
  category!: string;

  categories!: Observable<Categories[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categories = this.bookService.categories
      .pipe(
        catchError(error => {
          console.log('Error ocurred while fetching category List : ', error);
          return EMPTY;
        }));
  }
}