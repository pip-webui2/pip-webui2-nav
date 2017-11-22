import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipPrimaryActionsComponent } from './primary-actions.component';

@NgModule({
  declarations: [
    PipPrimaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipPrimaryActionsComponent
  ],
  providers: [],
})
export class PipPrimaryActionsModule { }