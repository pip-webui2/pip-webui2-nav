import { NgModule } from '@angular/core';

import { PipAppbarModule, PipAppbarIconModule, PipNavPartModule } from '../pip-webui2-nav';
import { AppBarExampleComponent } from './appbar-example.component';

@NgModule({
  declarations: [
    AppBarExampleComponent
  ],
  imports: [
    PipAppbarModule,
    PipAppbarIconModule,
    PipNavPartModule
  ],
  exports: [
    AppBarExampleComponent
  ],
  providers: [],
})
export class AppbarExampleModule { }