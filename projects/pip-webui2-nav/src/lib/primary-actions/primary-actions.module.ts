import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipPrimaryActionsComponent } from './primary-actions.component';

@NgModule({
  declarations: [
    PipPrimaryActionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipPrimaryActionsComponent
  ],
  providers: [],
})
export class PipPrimaryActionsModule { }
