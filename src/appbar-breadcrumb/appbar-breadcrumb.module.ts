import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';

import { PipAppbarBreadcrumbComponent } from './appbar-breadcrumb.component';

@NgModule({
  declarations: [
    PipAppbarBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    PipAppbarBreadcrumbComponent
  ],
  providers: [],
})
export class PipAppbarBreadcrumbModule { }