import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   const userService = inject(UserService);
//   if (userService.getToken()) {
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Bearer: ${userService.getToken()}`
//       }
//     });
//   }
//   return next(req);
// };

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userService = inject(UserService);
    console.log(userService.getToken());
    if (userService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer: ${userService.getToken()}`,
        },
      });
    }
    return next.handle(request);
  }
}
