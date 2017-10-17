import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipAppbarModule, PipAuxPanelModule, PipMediaModule, PipSidenavModule, PipContentLayoutModule, PipMainLayoutModule } from 'pip-webui2-layouts';
import { PipAppbarBreadcrumbModule, PipAppbarIconModule, PipAppbarPrimaryActionsModule, PipAppbarSecondaryActionsModule, PipNavPartModule, PipSidenavHeaderModule, PipSidenavMenuModule } from './pip-webui2-nav';

import { NavPartsExampleModule } from './navparts/navparts-example.module';
import { NavPartsExampleComponent } from './navparts/navparts-example.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'navparts', component: NavPartsExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'navparts' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,

    PipAppbarModule,
    PipAuxPanelModule,
    PipMediaModule,
    PipSidenavModule, 
    PipContentLayoutModule, 
    PipMainLayoutModule,

    PipAppbarBreadcrumbModule, 
    PipAppbarIconModule, 
    PipAppbarPrimaryActionsModule, 
    PipAppbarSecondaryActionsModule, 
    PipNavPartModule, 
    PipSidenavHeaderModule, 
    PipSidenavMenuModule,

    NavPartsExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
