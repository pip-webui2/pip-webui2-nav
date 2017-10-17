import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';

import { PipAppbarIconModule, PipNavPartModule, PipAppbarBreadcrumbModule, PipAppbarPrimaryActionsModule, PipAppbarSecondaryActionsModule } from '../pip-webui2-nav';
import { PipAppbarModule } from 'pip-webui2-layouts';
import { AppBarExampleComponent } from './appbar-example.component';
import { PipNavPartService } from '../pip-webui2-nav';


@NgModule({
  declarations: [
    AppBarExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,

    PipAppbarModule,
    PipAppbarIconModule,
    PipNavPartModule,
    PipAppbarBreadcrumbModule,
    PipAppbarPrimaryActionsModule,
    PipAppbarSecondaryActionsModule
  ],
  exports: [
    AppBarExampleComponent
  ],
  providers: [
    PipNavPartService
  ],
})
export class AppbarExampleModule { }