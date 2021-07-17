import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mode:any = {}
  @Input() usersFromHomeComponentParent : any ;
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {


  }


  register(){

    this.accountService.register(this.mode).subscribe(
      res => {
        console.log("🚀 ~ file: register.component.ts ~ line 24 ~ RegisterComponent ~ register ~ res", res)

        this.cancel();
        return res;
      }
      , err => {console.log("🚀 ~ file: register.component.ts ~ line 25 ~ RegisterComponent ~ register ~ err", err);}
      )

  }

  cancel(){
    this.cancelRegister.emit(false);
  }






}
