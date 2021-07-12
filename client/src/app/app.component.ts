import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oliver',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App, Oliver';
  users: any;

  constructor(private http: HttpClient){


  }
  ngOnInit(): void {
    //call this users
    this.getUsers()
  }

  getUsers(){
    this.http.get("https://localhost:5001/api/users")
    .subscribe(
        res =>{
          // assign users from DB
          this.users = res
          console.log("🚀 ~ file: app.component.ts ~ line 27 ~ AppComponent ~ getUsers ~ users", this.users)

        },
        error => {
          console.log("🚀 ~ file: app.component.ts ~ line 23 ~ AppComponent ~ this.http.get ~ error", error)
    })
  }

}
