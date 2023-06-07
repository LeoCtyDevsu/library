import { inject } from '@angular/core';
import {
  ResolveFn,
} from '@angular/router';
import { BookService } from 'src/app/library/services/book.service';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';

export const bookResolver: ResolveFn<BookModel> = (route, state) => {
  const bookService = inject(BookService);
  const bookId = route.paramMap.get('id');
  const book = bookService.getBook(bookId ?? '');
  return book;
};
