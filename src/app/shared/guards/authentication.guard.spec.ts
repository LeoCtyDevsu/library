import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';
import { authenticationGuard } from './authentication.guard';
import { UserService } from '../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { expect, jest } from '@jest/globals';
import { fakeRouterState } from '../helpers/testing.helper';
import { MockProvider } from 'ng-mocks';

describe('authenticationGuard authenticate', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      authenticationGuard(...guardParameters)
    );
  let router: Router;
  let mockUserService = {
    getToken: jest.fn(() => {
      return 'asdadadadasd';
    }),
  };
  let dummyRoute = {} as ActivatedRouteSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        MockProvider(UserService, {
          getToken: jest.fn(() => 'adkjahdkajhdkajhd'),
        }),
      ],
    });
    router = TestBed.inject(Router);
  });

  it('be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('Method canActivate returns true', () => {
    let mockUrl = '/admin/books';
    let canActivate = executeGuard(dummyRoute, fakeRouterState(mockUrl));
    expect(canActivate).toBeTruthy();
  });
});
