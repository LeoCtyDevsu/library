import { TestBed } from '@angular/core/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from '../services/user.service';
import { jest } from '@jest/globals';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('tokenInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UserService;
  let interceptor: TokenInterceptor;
  const mockToken: string = 'adkjahdkajhdkajhd';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MockProvider(UserService, {
          getToken: jest.fn(() => mockToken),
        }),
        TokenInterceptor,
        {
          provider: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UserService);
    interceptor = TestBed.inject(TokenInterceptor);
  });

  it('verify token', () => {
    const url = 'http://localhost:3001/books/owner';
    const mockHandler = {
      handle: jest.fn(() =>
        of(
          new HttpResponse({
            status: 200,
            body: { data: 'thisIsWhatImTesting' },
          })
        )
      ),
    };
    let mockRequest = new HttpRequest<any>('GET', url);
    interceptor
      .intercept(mockRequest, mockHandler)
      .subscribe((response: HttpEvent<any>) => {
        const headers = mockRequest.headers;
        const tokenInterceptor = interceptor.token;
        expect(tokenInterceptor).toBe(mockToken);
      });
    httpTestingController.verify();
  });

  it('verify header authorization', () => {
    const url = 'http://localhost:3001/books/owner';
    const HEADER = 'Authorization';
    httpClient.post(url, {}).subscribe();
    const req = httpTestingController.expectOne(url);
    const headers = req.request.headers;
    httpTestingController.verify();
  });
});
