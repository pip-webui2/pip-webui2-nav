import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule } from '@angular/material';

import { PipAppbarModule, PipAppbarIconModule, PipNavPartModule } from '../pip-webui2-nav';
import { AppBarExampleComponent } from './appbar-example.component';
import { PipNavPartService } from '../pip-webui2-nav';


@NgModule({
  declarations: [
    AppBarExampleComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,

    PipAppbarModule,
    PipAppbarIconModule,
    PipNavPartModule
  ],
  exports: [
    AppBarExampleComponent
  ],
  providers: [
    PipNavPartService
  ],
})
export class AppbarExampleModule { }