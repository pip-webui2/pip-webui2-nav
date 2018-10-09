import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { PipSecondaryActionsComponent } from './secondary-actions.component';

@NgModule({
  declarations: [
    PipSecondaryActionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    PipSecondaryActionsComponent
  ],
  providers: [],
})
export class PipSecondaryActionsModule { }
