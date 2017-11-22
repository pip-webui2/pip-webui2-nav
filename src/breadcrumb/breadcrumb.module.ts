import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { PipBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [
    PipBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipBreadcrumbComponent
  ],
  providers: [],
})
export class PipBreadcrumbModule { }