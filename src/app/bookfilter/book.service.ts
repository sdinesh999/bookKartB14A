import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, map } from 'rxjs/operators';
import { Book } from '../book';
import { Categories } from '../categories';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL = 'https://bookcart.azurewebsites.net/api/Book/GetCategoriesList';

  constructor(private http: HttpClient) { }

  categories = this.http.get<Categories[]>(this.baseURL + 'GetCategoriesList').pipe(shareReplay(1));

  books = this.getAllBooks().pipe(shareReplay(1));

  getAllBooks() {
    return this.http.get<Book[]>(this.baseURL);
  }

  addBook(book: any) {
    return this.http.post(this.baseURL, book);
  }

  getBookById(id: number) {
    return this.books.pipe(map(book => book.find(b => b.bookId === id)));
  }

  getsimilarBooks(bookId: number) {
    return this.http.get<Book[]>(this.baseURL + 'GetSimilarBooks/' + bookId);
  }

  updateBookDetails(book: any) {
    return this.http.put(this.baseURL, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseURL + id);
  }
}