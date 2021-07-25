import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // !! BsDropdownModule module -> install from npm
    BsDropdownModule.forRoot(),
    // !! Toastr module -> install from npm
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    // !! Tabs module -> install from npm
    TabsModule.forRoot(),
    // !! NgxGalleryModule -> install from npm
    NgxGalleryModule
  ],
  /// !!! need to export -> module available everywhere
  exports:[
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
