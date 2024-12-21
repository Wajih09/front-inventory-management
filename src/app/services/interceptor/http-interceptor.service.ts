import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthenticationResponse } from '../../../gs-api/src/models';
import { LoaderService } from '../../components/loader/service/loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let authenticationResponse: AuthenticationResponse = {};
    if (localStorage.getItem('accessToken')) {
      /*console.log('JSON.parse = ', JSON.parse(
        localStorage.getItem('accessToken') as string
      )); // object {"accessToken":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxcUBlbWFpbC5jb20iLCJpYXQiOjE3MTU5ODYyMTEsImV4cCI6MTcxNjAyMjIxMSwiaWRFbnRyZXByaXNlIjoiIn0.PJq8uQ-viS6dBmwmMYZaDXYg1tIdoOOOJYGDjt55FkI"}

      console.log('JSON.parse type = ', typeof (JSON.parse(
        localStorage.getItem('accessToken') as string
      ))); // object*/

      authenticationResponse = JSON.parse(
        localStorage.getItem('accessToken') as string
      );
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });
      //p46 return next.handle(authReq); //means if i have acceToken then consider it
      return this.handleRequest(authReq, next);
    }
    //p46 return next.handle(req); //if i don't have accessToken just return the request toward back-end
    return this.handleRequest(req, next);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService.hide();
        }
      }, (err: any) => {
          this.loaderService.hide();
      }));
  }
}
