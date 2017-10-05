import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdIconModule, MdMenuModule } from '@angular/material';

import { PipAppbarPrimaryActionsComponent } from './appbar-primary-actions.component';

@NgModule({
  declarations: [
    PipAppbarPrimaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule
  ],
  exports: [
    PipAppbarPrimaryActionsComponent
  ],
  providers: [],
})
export class PipAppbarPrimaryActionsModule { }