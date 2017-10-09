import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

import { PipSidenavHeaderComponent } from './sidenav-header.component';

@NgModule({
  declarations: [
    PipSidenavHeaderComponent
  ],
  imports: [
    MdToolbarModule,
    FlexLayoutModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    PipSidenavHeaderComponent
  ],
  providers: [],
})
export class PipSidenavHeaderModule { }
