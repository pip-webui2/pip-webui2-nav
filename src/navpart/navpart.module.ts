import { NgModule } from '@angular/core';

import { NavPartService } from './shared/navpart.service';
import { PipNavPartDirective } from './navpart.directive';

@NgModule({
  declarations: [
    PipNavPartDirective
  ],
  imports: [
    
  ],
  exports: [  
    PipNavPartDirective
  ],
  providers: [
    NavPartService
  ]
})
export class PipNavPartModule { }