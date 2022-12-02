import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService:TokenStorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    const token = this.tokenService.getToken()

    if (token !== null ) {
      let clone = request.clone({
        headers : request.headers.set('Authorization','Bearer '+token)
      })
      console.log( "clone"+ clone);
      console.log(token);
      
      return next.handle(clone)
    }

    return next.handle(request);
  }
}


export const TokenInterceptorProvider = {
  provider: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi : true
}
