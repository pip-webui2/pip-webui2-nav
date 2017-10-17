import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipAppbarSecondaryActionsComponent } from './appbar-secondary-actions.component';

@NgModule({
  declarations: [
    PipAppbarSecondaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipAppbarSecondaryActionsComponent
  ],
  providers: [],
})
export class PipAppbarSecondaryActionsModule { }