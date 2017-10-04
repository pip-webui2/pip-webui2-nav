import { NgModule } from '@angular/core';

import { PipSidenavModule, PipSidenavMenuModule } from '../pip-webui2-nav';
import { SidenavExampleComponent } from './sidenav-example.component';

@NgModule({
  declarations: [
    SidenavExampleComponent
  ],
  imports: [
    PipSidenavModule,
    PipSidenavMenuModule
  ],
  exports: [
    SidenavExampleComponent
  ],
  providers: [],
})
export class SidenavExampleModule { }