import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatListModule, MatOptionModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { PipNavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [
    PipNavMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    PipNavMenuComponent
  ],
  providers: [],
})
export class PipNavMenuModule { }
