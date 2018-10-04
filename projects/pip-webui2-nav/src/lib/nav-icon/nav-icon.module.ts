import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipNavIconComponent } from './nav-icon.component';

@NgModule({
  declarations: [
    PipNavIconComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    PipNavIconComponent
  ],
  providers: [],
})
export class PipNavIconModule { }
