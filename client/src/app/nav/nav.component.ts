import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {};


  constructor(public accountService: AccountService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login(){
    //! return observable -> subscribe -> see it
    this.accountService.login(this.model).subscribe(res => {

     //  !! redirect user -> members page
     this.router.navigateByUrl('/members');


    }, err => {
      console.log("🚀 ~ file: nav.component.ts ~ line 23 ~ NavComponent ~ this.accountService.login ~ err", err)

    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
