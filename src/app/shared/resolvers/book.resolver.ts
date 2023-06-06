import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from 'src/app/library/services/book.service';
import { BookModel } from '../models/book.model';

export const bookResolver: ResolveFn<BookModel> = (route, state) => {
  const bookService = inject(BookService);
  const bookId = route.paramMap.get('id');
  const book = bookService.getBook(bookId ?? '');
  return book;
};
