import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipNavIconComponent } from './nav-icon.component';

@NgModule({
  declarations: [
    PipNavIconComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    PipNavIconComponent
  ],
  providers: [],
})
export class PipNavIconModule { }