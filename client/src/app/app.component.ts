import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'oliver',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App, Oliver';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){


  }
  ngOnInit(): void {


    this.setCurrentUser();
  }


  setCurrentUser(){

      const user : User = JSON.parse(localStorage.getItem('user') || "tEST");
      this.accountService.setCurrentUser(user);


  }



}
