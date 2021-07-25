import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Member } from '../_models/member';



@Injectable({
  providedIn: 'root'
})


export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getMembers(){
    return this.httpClient.get<Member[]>(
        this.baseUrl + "users"
        );
  }

  getMember(userName : String){
    return this.httpClient.get<Member>(
      this.baseUrl + "users/" + userName
      );

  }
}


