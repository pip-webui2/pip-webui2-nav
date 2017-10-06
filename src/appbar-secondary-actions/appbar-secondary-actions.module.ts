import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdIconModule, MdMenuModule } from '@angular/material';

import { PipAppbarSecondaryActionsComponent } from './appbar-secondary-actions.component';

@NgModule({
  declarations: [
    PipAppbarSecondaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule
  ],
  exports: [
    PipAppbarSecondaryActionsComponent
  ],
  providers: [],
})
export class PipAppbarSecondaryActionsModule { }