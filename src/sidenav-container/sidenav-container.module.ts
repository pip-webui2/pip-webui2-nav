import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material'

import { FlexLayoutModule } from '@angular/flex-layout';

import { PipSidenavContainerComponent } from './sidenav-container.component';

@NgModule({
  declarations: [
    PipSidenavContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    PipSidenavContainerComponent
  ],
  providers: [],
})
export class PipSidenavContainerModule { }