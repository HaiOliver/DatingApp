import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Member } from '../_models/member';

const httpOptions =  {headers: new HttpHeaders({
  Authorization: "Bearer" + JSON.parse(localStorage.getItem("user") || '').token
})}



@Injectable({
  providedIn: 'root'
})




export class MembersService {
  // members : Members

  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getMembers(){
    return this.httpClient.get<Member[]>(
        this.baseUrl + "users",
        // ? header -> pass JWT Token
        httpOptions
        )
  }

  getMember(userName : String){
    return this.httpClient.get<Member[]>(
      this.baseUrl + "user/" + userName,
      // ? header -> pass JWT Token
      httpOptions
      )

  }
}


