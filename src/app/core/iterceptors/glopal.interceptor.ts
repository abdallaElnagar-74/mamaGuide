import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlopalInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl = 'http://mamaguide.runasp.net/api/'
    const tokeen:any = localStorage.getItem('adminToken')
    let x = request.clone({
      url:baseUrl+request.url
    })
    return next.handle(x);
  }
}
