import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { PipAppbarBreadcrumbComponent } from './appbar-breadcrumb.component';

@NgModule({
  declarations: [
    PipAppbarBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipAppbarBreadcrumbComponent
  ],
  providers: [],
})
export class PipAppbarBreadcrumbModule { }