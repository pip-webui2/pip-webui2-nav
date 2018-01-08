import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatListModule, MatOptionModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { PipNavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [
    PipNavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    PipNavMenuComponent
  ],
  providers: [],
})
export class PipNavMenuModule { }