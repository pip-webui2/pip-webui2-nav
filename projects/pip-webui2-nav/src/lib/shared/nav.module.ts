import { NgModule, ModuleWithProviders } from '@angular/core';

import { PipNavService } from './nav.service';

@NgModule()
export class PipNavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipNavModule,
      providers: [
        PipNavService
      ]
    };
  }
}
