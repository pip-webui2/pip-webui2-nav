import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipTestModule, PipAppbarIconModule } from './pip-webui2-nav';
import { PipAppbarModule, PipSidenavModule } from 'pip-webui2-layouts';
import { AppbarExampleModule } from './appbar/appbar-example.module';
import { SidenavExampleModule } from './sidenav/sidenav-example.module';
import { AppBarExampleComponent } from './appbar/appbar-example.component';
import { SidenavExampleComponent } from './sidenav/sidenav-example.component'; 
import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'appbar', component: AppBarExampleComponent },
  { path: 'sidenav', component: SidenavExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'appbar' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    PipTestModule,
    AppbarExampleModule,
    SidenavExampleModule,
    ExampleListModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 