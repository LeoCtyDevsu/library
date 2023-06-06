import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookResolver } from './book.resolver';
import { BookService } from 'src/app/library/services/book.service';
import { BookModel } from '../models/book.model';

describe('bookResolver', () => {
  const executeResolver: ResolveFn<BookModel> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => bookResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService]
    });
  });

  it('be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
