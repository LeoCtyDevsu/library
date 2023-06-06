import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userSubject: BehaviorSubject<UserModel>;
  public user$: Observable<UserModel>;

  constructor() {
    this.userSubject = new BehaviorSubject<UserModel>({});
    this.user$ = this.userSubject.asObservable();
  }

  setUser(user: UserModel) {
    sessionStorage.setItem('token', user?.accessToken ?? '');
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.value;
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  setToken(token: string | null) {
    sessionStorage.setItem('token', token ?? '');
  }
}
