import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserModel } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;
  const mockUser: UserModel = {
    userId: 'mockData',
    name: 'mockData',
    username: 'mockData',
    email: 'mockData',
    password: 'mockData',
    category: [1, 2, 3],
    accessToken: 'mockData',
    tokenType: 'mockData'
  };
  const mockToken = 'mockToken';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('be created', () => {
    expect(service).toBeTruthy();
  });

  it('get user', () => {
    service.setUser(mockUser);
    const user = service.userSubject.value;
    expect(user).toBe(mockUser);
  });

  it('set user', () => {
    service.setUser(mockUser);
    const user = service.getUser();
    expect(user).toBe(mockUser);
  });

  it('token', () => {
    service.setToken(mockToken);
    const token = service.getToken();
    expect(token).toBe(mockToken);
  });
});
