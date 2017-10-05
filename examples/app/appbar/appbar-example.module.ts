import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';

import { PipAppbarModule, PipAppbarIconModule, PipNavPartModule, PipAppbarBreadcrumbModule } from '../pip-webui2-nav';
import { AppBarExampleComponent } from './appbar-example.component';
import { PipNavPartService } from '../pip-webui2-nav';


@NgModule({
  declarations: [
    AppBarExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,

    PipAppbarModule,
    PipAppbarIconModule,
    PipNavPartModule,
    PipAppbarBreadcrumbModule
  ],
  exports: [
    AppBarExampleComponent
  ],
  providers: [
    PipNavPartService
  ],
})
export class AppbarExampleModule { }