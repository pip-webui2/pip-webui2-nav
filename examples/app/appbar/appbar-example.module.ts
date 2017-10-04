import { NgModule } from '@angular/core';

import { PipAppbarModule, PipAppbarIconModule } from '../pip-webui2-nav';
import { AppBarExampleComponent } from './appbar-example.component';

@NgModule({
  declarations: [
    AppBarExampleComponent
  ],
  imports: [
    PipAppbarModule,
    PipAppbarIconModule
  ],
  exports: [
    AppBarExampleComponent
  ],
  providers: [],
})
export class AppbarExampleModule { }