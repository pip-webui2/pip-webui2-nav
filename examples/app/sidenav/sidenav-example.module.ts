import { NgModule } from '@angular/core';

import { PipSidenavContainerModule, PipSidenavModule, PipSidenavMenuModule } from '../pip-webui2-nav';
import { SidenavExampleComponent } from './sidenav-example.component';

import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    SidenavExampleComponent
  ],
  imports: [
    PipSidenavModule,
    PipSidenavMenuModule,
    PipSidenavContainerModule,
    MatSidenavModule
  ],
  exports: [
    SidenavExampleComponent
  ],
  providers: [],
})
export class SidenavExampleModule { }