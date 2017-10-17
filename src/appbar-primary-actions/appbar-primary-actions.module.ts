import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipAppbarPrimaryActionsComponent } from './appbar-primary-actions.component';

@NgModule({
  declarations: [
    PipAppbarPrimaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipAppbarPrimaryActionsComponent
  ],
  providers: [],
})
export class PipAppbarPrimaryActionsModule { }