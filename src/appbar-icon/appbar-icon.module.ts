import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipAppbarIconComponent } from './appbar-icon.component';

@NgModule({
  declarations: [
    PipAppbarIconComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    PipAppbarIconComponent
  ],
  providers: [],
})
export class PipAppbarIconModule { }