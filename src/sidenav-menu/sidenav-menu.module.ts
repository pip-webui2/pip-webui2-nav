import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { PipSidenavMenuComponent } from './sidenav-menu.component';

@NgModule({
  declarations: [
    PipSidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PipSidenavMenuComponent
  ],
  providers: [],
})
export class PipSidenavMenuModule { }