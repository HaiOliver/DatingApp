import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;
  constructor(private router:Router) {

    const navigation = this.router.getCurrentNavigation();
    // ! use ? options => may return null
    this.error = navigation?.extras?.state?.error;
    console.log("🚀 ~ file: server-error.component.ts ~ line 16 ~ ServerErrorComponent ~ constructor ~ error: ", this.error)
   }

  ngOnInit(): void {
  }

}
