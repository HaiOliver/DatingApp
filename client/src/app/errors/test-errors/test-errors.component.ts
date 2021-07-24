import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  get404Error(){
    this.http.get(this.baseUrl + "buggy/not-found").subscribe(
      res => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 20 ~ TestErrorsComponent ~ get404Error ~ res", res)
      },
      err => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 23 ~ TestErrorsComponent ~ get404Error ~ err", err)

    })
  }

  get400Error(){
    this.http.get(this.baseUrl + "buggy/bad-request").subscribe(
      res => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 31 ~ TestErrorsComponent ~ get400Error ~ res", res)

      },
      err => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 35 ~ TestErrorsComponent ~ get400Error ~ err", err)

    })
  }


  get500Error(){
    this.http.get(this.baseUrl + "buggy/server-error").subscribe(
      res => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 44 ~ TestErrorsComponent ~ get500Error ~ res", res)

      },
      err => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 48 ~ TestErrorsComponent ~ get500Error ~ err", err)


    })
  }


  get401Error(){
    this.http.get(this.baseUrl + "buggy/auth").subscribe(
      res => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 58 ~ TestErrorsComponent ~ get401Error ~ res", res)

      },
      err => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 62 ~ TestErrorsComponent ~ get401Error ~ err", err)


    })
  }


  get404ValidationError(){
    this.http.post(this.baseUrl + "account/register",{}).subscribe(
      res => {
      console.log("🚀 ~ file: test-errors.component.ts ~ line 20 ~ TestErrorsComponent ~ get404Error ~ res", res)
      },
      err => {
      this.validationErrors = err
      console.log("🚀 ~ file: test-errors.component.ts ~ line 23 ~ TestErrorsComponent ~ get404Error ~ err", err)

    })
  }

}
