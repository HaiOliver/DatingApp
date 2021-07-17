import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // !! import here -> use everywhere
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  /// !!! need to export -> module available everywhere
  exports:[
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }
