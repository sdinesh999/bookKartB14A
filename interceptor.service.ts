import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';



@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.authService.getEmailAuthenticated() && this.authService.getToken()){

      req = req.clone({

        setHeaders: {
          Authorization: this.authService.getToken()!
        }
      })
   }

   return next.handle(req)
  }
}