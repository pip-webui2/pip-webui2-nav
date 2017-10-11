import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material'

import { PipSidenavComponent } from './sidenav.component';
import { PipSidenavService } from './shared/sidenav.service';

@NgModule({
  declarations: [
    PipSidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    PipSidenavComponent
  ],
  providers: [
    PipSidenavService
  ]
})
export class PipSidenavModule { }