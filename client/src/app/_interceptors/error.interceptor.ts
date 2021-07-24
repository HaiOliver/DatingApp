import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  // !! inject to constructor -> router, Toast-> use
  constructor(private router: Router, private toastr: ToastrService) {}

  // !!! HttpRequest -> automatically intercept -> response from server
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // ! this is observable -> use pipe
    return next.handle(request).pipe(
      catchError(error => {
      console.log("🚀 ~ file: error.interceptor.ts ~ line 23 ~ ErrorInterceptor ~ intercept ~ error: ", error)
         // ? cases
         if(error){
           switch(error.status){
            case 400:
              // code block
              if(error.error.errors){
                const modalStateErrors = [];
                for(let key in error.error.errors){
                  modalStateErrors.push(error.error.errors[key])
                }
                throw modalStateErrors.flat();
              }else{
                this.toastr.error(error.statusText, error.status)
              }
              break;
            case 401:
              // code block
              this.toastr.error(error.statusText, error.status);
              break;
            case 404:
                this.router.navigateByUrl('/not-found');
              // code block
              break;
            case 500:
              const navigationExtras: NavigationExtras = { state: {error:error.error}}
              this.router.navigateByUrl("/server-error", navigationExtras);
              // code block
              break;

            default:
              this.toastr.error("Something not catch in catch error");
              console.log(error);
              break;
              // code block

           }
         }
        return throwError(error);
      })
    );
  }
}
