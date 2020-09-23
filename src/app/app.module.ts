import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import {
  PipAppbarModule,
  PipMediaModule,
  PipRootLayoutModule, PipSidenavModule,
  PipSidenavPosition
} from 'pip-webui2-layouts';
import {
  PipBreadcrumbModule,
  PipNavHeaderModule, PipNavIconModule,
  PipNavMenuModule, PipNavModule, PipPrimaryActionsModule,
  PipSecondaryActionsModule
} from 'pip-webui2-nav';
import { PipThemesModule, pipWebUI2ThemesList } from 'pip-webui2-themes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavpartsExampleModule } from './navparts-example/navparts-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatListModule, MatButtonModule,
    TranslateModule.forRoot(),

    PipThemesModule.withConfig({
      themes: pipWebUI2ThemesList
    }),
    PipAppbarModule.forRoot(),
    PipMediaModule.forRoot(),
    PipSidenavModule.withConfig({
      start: {
        views: [
          {
            name: 'default',
            position: PipSidenavPosition.Main,
            width: 300,
          },
          {
            name: 'tablet',
            alias: 'lt-md',
            position: PipSidenavPosition.Root,
            mode: 'side',
            collapsed: true,
            opened: true,
            active: false
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over'
          }
        ]
      },
      end: {
        views: [
          {
            name: 'default',
            position: PipSidenavPosition.Root,
            mode: 'side',
            width: 350
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over'
          }
        ]
      }
    }),
    PipRootLayoutModule,
    PipNavHeaderModule,
    PipBreadcrumbModule,
    PipNavIconModule,
    PipPrimaryActionsModule,
    PipSecondaryActionsModule,
    PipNavModule,
    PipNavMenuModule,

    AppRoutingModule,
    NavpartsExampleModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
