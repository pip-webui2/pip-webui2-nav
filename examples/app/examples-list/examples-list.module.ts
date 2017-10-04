import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdListModule } from '@angular/material';

import { ExamplesListComponent } from './examples-list.component';

@NgModule({
  declarations: [
    ExamplesListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MdListModule
  ],
  exports: [
    ExamplesListComponent
  ],
  providers: [],
})
export class ExampleListModule { }