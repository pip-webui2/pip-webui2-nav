import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipSecondaryActionsComponent } from './secondary-actions.component';

@NgModule({
  declarations: [
    PipSecondaryActionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    TranslateModule,
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