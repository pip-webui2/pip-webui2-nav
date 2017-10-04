import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipTestModule } from './pip-webui2-nav';
import { PipAppbarModule, PipAppbarIconModule } from './pip-webui2-nav';
import { PipSidenavModule} from './pip-webui2-nav';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipTestModule,
    PipAppbarModule,
    PipAppbarIconModule,
    PipSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 