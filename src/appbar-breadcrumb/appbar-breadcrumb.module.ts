import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MdMenuModule} from '@angular/material';

import { PipAppbarBreadcrumbComponent } from './appbar-breadcrumb.component';

@NgModule({
  declarations: [
    PipAppbarBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    MdMenuModule
  ],
  exports: [
    PipAppbarBreadcrumbComponent
  ],
  providers: [],
})
export class PipAppbarBreadcrumbModule { }