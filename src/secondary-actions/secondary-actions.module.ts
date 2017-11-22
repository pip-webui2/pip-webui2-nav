import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipSecondaryActionsComponent } from './secondary-actions.component';

@NgModule({
  declarations: [
    PipSecondaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipSecondaryActionsComponent
  ],
  providers: [],
})
export class PipSecondaryActionsModule { }