import { NgModule } from '@angular/core';

import { PipNavPartService } from './shared/navpart.service';
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
    PipNavPartService
  ]
})
export class PipNavPartModule { }