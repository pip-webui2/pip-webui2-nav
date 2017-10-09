import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule, MdIconModule } from '@angular/material';
import { MatListModule, MatOptionModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipSidenavMenuComponent } from './sidenav-menu.component';

@NgModule({
  declarations: [
    PipSidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdIconModule,
    MatOptionModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    PipSidenavMenuComponent
  ],
  providers: [],
})
export class PipSidenavMenuModule { }