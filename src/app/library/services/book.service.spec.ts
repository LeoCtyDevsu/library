import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ConfigModel } from 'src/app/shared/models/config.model';
import { BookModel } from 'src/app/shared/models/book.model';

describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;
  let configModel: ConfigModel;
  const bookId = 'mockBook';
  const mockBook: BookModel = {
    id: 'mockBook',
    title: 'mockBook',
    author: 'mockBook',
    resume: 'mockBook',
    image: 'mockBook',
    url: 'mockBook',
    userRegister: 'mockBook',
    category: [1, 2, 3],
    public: true,
    isbn13: 1,
    price: 'mockBook',
  };
  const mockBooks: BookModel[] = [mockBook, mockBook];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
    configModel = service.configModel;
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });

  it('list books', () => {
    service.listBooks().subscribe((res) => {
      expect(res).toEqual(mockBooks);
    });
    const url = `${configModel.API_URL}/books/owner`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBooks);
  });

  it('list books fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorMessage = 'API error';
    const url = `${configModel.API_URL}/books/owner`;

    service.listBooks().subscribe({
      next: () => fail('have failed with the 500 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(500);
        expect(error.error).withContext('message').toEqual(errorMessage);
      },
      complete: () => fail('have failed with the 500 error'),
    });
    const request = httpTestingController.expectOne(url);
    request.flush(errorMessage, { status, statusText });
  });

  it('get books', () => {
    service.getBook(bookId).subscribe((res) => {
      expect(res).toEqual(mockBook);
    });
    const url = `${configModel.API_URL}/books/owner`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBook);
  });

  it('get books fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorMessage = 'API error';
    const url = `${configModel.API_URL}/books/owner`;

    service.getBook(bookId).subscribe({
      next: () => fail('have failed with the 500 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(500);
        expect(error.error).withContext('message').toEqual(errorMessage);
      },
      complete: () => fail('have failed with the 500 error'),
    });
    const request = httpTestingController.expectOne(url);
    request.flush(errorMessage, { status, statusText });
  });

  it('register books', () => {
    service.registerBook(mockBook).subscribe((res) => {
      expect(res).toEqual(mockBook);
    });
    const url = `${configModel.API_URL}/books/owner`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush(mockBook);
  });

  it('register books fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorMessage = 'API error';
    const url = `${configModel.API_URL}/books/owner`;

    service.registerBook(mockBook).subscribe({
      next: () => fail('have failed with the 500 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(500);
        expect(error.error).withContext('message').toEqual(errorMessage);
      },
      complete: () => fail('have failed with the 500 error'),
    });
    const request = httpTestingController.expectOne(url);
    request.flush(errorMessage, { status, statusText });
  });
});
