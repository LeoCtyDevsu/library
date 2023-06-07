import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public token: string | null = null;

  constructor(private _userService: UserService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = this._userService.getToken();
    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer: ${this.token}`,
        },
      });
    }
    return next.handle(request);
  }
}
