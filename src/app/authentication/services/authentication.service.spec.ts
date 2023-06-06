import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { ConfigModel } from 'src/app/shared/models/config.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpTestingController: HttpTestingController;
  let configModel: ConfigModel;
  const mockUserDataResponse: UserModel = {
    accessToken: 'adadao8732487234ahskjd',
    category: [1, 2, 3],
    email: 'email@google.com',
    name: 'Administrador',
    password: 'Qabalah10.',
    tokenType: 'Bearer',
    userId: '123jas',
    username: 'LeoCty',
  };
  const user: UserModel = {
    username: 'LeoCty',
    password: 'Qabalah10.',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService],
    });
    service = TestBed.inject(AuthenticationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    configModel = service.configModel;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });

  it('login', () => {
    service.login(user).subscribe((res) => {
      expect(res).toEqual(mockUserDataResponse);
    });
    const url = `${configModel.API_URL}/users/login`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush(mockUserDataResponse);
  });

  it('login fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorMessage = 'API error';
    const url = `${configModel.API_URL}/users/login`;

    service.login(user).subscribe({
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

  it('register', () => {
    service.register(user).subscribe((res) => {
      expect(res).toEqual(mockUserDataResponse);
    });
    const url = `${configModel.API_URL}/users/create`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush(mockUserDataResponse);
  });

  it('register fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorMessage = 'API error';
    const url = `${configModel.API_URL}/users/create`;

    service.register(user).subscribe({
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
