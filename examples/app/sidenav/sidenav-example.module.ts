import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import { PipSidenavContainerModule, PipSidenavHeaderModule, PipSidenavModule, PipSidenavMenuModule, PipNavPartModule } from '../pip-webui2-nav';
import { SidenavExampleComponent } from './sidenav-example.component';


@NgModule({
  declarations: [
    SidenavExampleComponent
  ],
  imports: [
    MatSidenavModule,
    FlexLayoutModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,

    PipSidenavHeaderModule,
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