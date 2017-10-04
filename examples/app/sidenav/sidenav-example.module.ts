import { NgModule } from '@angular/core';

import { PipSidenavModule } from '../pip-webui2-nav';
import { SidenavExampleComponent } from './sidenav-example.component';

@NgModule({
  declarations: [
    SidenavExampleComponent
  ],
  imports: [
    PipSidenavModule
  ],
  exports: [
    SidenavExampleComponent
  ],
  providers: [],
})
export class SidenavExampleModule { }