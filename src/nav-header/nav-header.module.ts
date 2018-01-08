import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

import { PipNavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations: [
    PipNavHeaderComponent
  ],
  imports: [
    MatToolbarModule,
    FlexLayoutModule,
    TranslateModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    PipNavHeaderComponent
  ],
  providers: [],
})
export class PipNavHeaderModule { }
