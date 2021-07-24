import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
// !!! service in angular -> singeton -> keep, not destroy like component
export class AccountService {
  baseUrl = environment.apiUrl;

  // ! create observable for consistent
  private currentUserSource = new ReplaySubject<User>(1);
  // !! with $ -> observable
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {

   }

   // ? Log request
  login(model:any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
        map((response : User) => {

          const user = response;
          console.log("🚀 ~ file: account.service.ts ~ line 28 ~ AccountService ~ map ~ user", user)
          if(user){
            localStorage.setItem('user', JSON.stringify(user));
            // ? add to CurrentUserSources
            this.currentUserSource.next(user);
          }
        })

      );
  }

  // ? Register
  register( model: any){
    return this.http.post<User>(this.baseUrl+"account/register", model).pipe(
      map((user: User) => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user)
        }

        return user;
      })
    )

  }


  setCurrentUser(user : User){
    // ! use this method in app.module -> set next user log in -> new user -> keep persistent
    this.currentUserSource.next(user)
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);

  }


}
