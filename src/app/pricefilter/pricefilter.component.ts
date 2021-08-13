import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../bookfilter/book.service';

@Component({
  selector: 'app-pricefilter',
  templateUrl: './pricefilter.component.html',
  styleUrls: ['./pricefilter.component.scss']
})
export class PricefilterComponent implements OnInit {
  @Output()
  priceValue = new EventEmitter<number>(true);

  max!: number;
  min!: number;
  value!: number;
  step = 2000;
  price!: number;
  thumbLabel = true;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.setPriceFilterProperties();
  }

  setPriceFilterProperties() {
    this.bookService.books.pipe().subscribe(
      (value: Book[]) => {
        this.setMinValue(value);
        this.setMaxValue(value);
      }
    );
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  onChange(value :number) {
    this.priceValue.emit(value);
  }

  setMinValue(book: Book[]) {
    this.min = book.reduce((prev:any, curr:any) => {
      return prev.price < curr.price ? prev : curr;
    }).price;
  }

  setMaxValue(book: Book[]) {
    this.value = this.max = book.reduce((prev:any, curr:any) => {
      return prev.price > curr.price ? prev : curr;
    }).price;
  }
}

