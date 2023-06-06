import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { authenticationGuard } from './authentication.guard';
import { UserService } from '../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { expect, jest } from '@jest/globals';

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
      providers: [{ provider: UserService, useValue: mockUserService }],
    });
    router = TestBed.inject(Router);
  });

  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }

  it('be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  // it('Method canActivate returns true', () => {
  //   let mockUrl = '/admin/bokks';
  //   let canActivate = executeGuard(dummyRoute, fakeRouterState(mockUrl));
  //   expect(canActivate).toBeTruthy();
  // });
});
