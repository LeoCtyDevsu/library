import { TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  convertToParamMap,
} from '@angular/router';
import { jest } from '@jest/globals';
import { bookResolver } from './book.resolver';
import { BookService } from 'src/app/library/services/book.service';
import { BookModel } from '../models/book.model';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { fakeRouterState } from '../helpers/testing.helper';

describe('bookResolver', () => {
  const executeResolver: ResolveFn<BookModel> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => bookResolver(...resolverParameters));
  const mockBook: BookModel = {
    id: 'mockData',
    title: 'mockData',
    author: 'mockData',
    resume: 'mockData',
    image: 'mockData',
    url: 'mockData',
    userRegister: 'mockData',
    category: [1, 2, 3],
    public: true,
    isbn13: 1,
    price: 'mockData',
  };
  function mockFunGetBook(mockBookId: string): Observable<BookModel> {
    return of(mockBook);
  }
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: 'one-id' }) },
          },
        },
        MockProvider(BookService, {
          getBook: jest.fn(() => mockFunGetBook('')),
        }),
      ],
    });
    route = TestBed.get(ActivatedRoute);
  });

  it('be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('resolve a book', () => {
    let mockUrl = '/admin/books/view/12122';
    let book = executeResolver(route.snapshot, fakeRouterState(mockUrl));
    (book as Observable<BookModel>).subscribe((b) => {
      expect(b).toEqual(mockBook);
    });
  });
});
