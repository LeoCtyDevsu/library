import { TestBed } from '@angular/core/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { TokenInterceptor } from './token.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from '../services/user.service';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { UserModel } from '../models/user.model';
import { jest } from '@jest/globals';
import { ConfigService } from '../services/config.service';

describe('tokenInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let authenticationService: AuthenticationService;
  const user: UserModel = {
    username: 'LeoCty',
    password: 'Qabalah10.',
  };
  const mockUserService = {
    getToken: jest.fn(() => 'adkjahdkajhdkajhd'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
        { provider: UserService, useValue: mockUserService },
        {
          provider: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: false,
        },
      ],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    authenticationService = TestBed.inject(AuthenticationService);
  });

  // it('created', () => {
  //   expect(interceptor).toBeTruthy();
  // });

  // it('add header token', () => {
  //   const HEADER = 'Authorization';
  //   const url = 'http://localhost:3001/books/owner';
  //   // authenticationService.login(user).subscribe();
  //   httpClient.post(url, user).subscribe();
  //   const req = httpTestingController.expectOne(url);
  //   const headers = req.request.headers;
  //   expect(headers.has(HEADER)).toBeTruthy();
  //   httpTestingController.verify();
  // });
});
