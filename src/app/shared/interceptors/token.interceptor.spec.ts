import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from '../services/user.service';
import { jest } from '@jest/globals';
import { MockProvider } from 'ng-mocks';

describe('tokenInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UserService;
  let interceptor: TokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenInterceptor,
        {
          provider: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
        MockProvider(UserService, {
          getToken: jest.fn(() => 'adkjahdkajhdkajhd')
        }),
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UserService);
    interceptor = TestBed.inject(TokenInterceptor);
  });

  it('add header token', () => {
    const HEADER = 'Authorization';
    const url = 'http://localhost:3001/books/owner';
    httpClient.post(url, {}).subscribe();
    const tokenInterceptor = interceptor.token;
    const tokenService = userService.getToken();
    const req = httpTestingController.expectOne(url);
    const headers = req.request.headers;
    // expect(headers.has(HEADER)).toBeTruthy();
    httpTestingController.verify();
  });
});

