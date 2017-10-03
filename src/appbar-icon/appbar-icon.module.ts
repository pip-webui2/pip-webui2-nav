import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { PipAppbarIconComponent } from './appbar-icon.component';

@NgModule({
  declarations: [
    PipAppbarIconComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdIconModule,
  ],
  exports: [
    PipAppbarIconComponent
  ],
  providers: [],
})
export class PipAppbarIconModule { }