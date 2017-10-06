import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { PipSidenavContainerModule, PipSidenavModule, PipSidenavMenuModule, PipNavPartModule } from '../pip-webui2-nav';
import { SidenavExampleComponent } from './sidenav-example.component';


@NgModule({
  declarations: [
    SidenavExampleComponent
  ],
  imports: [
    MatSidenavModule,

    PipSidenavModule,
    PipSidenavMenuModule,
    PipSidenavContainerModule,
    PipNavPartModule
  ],
  exports: [
    SidenavExampleComponent
  ],
  providers: [],
})
export class SidenavExampleModule { }