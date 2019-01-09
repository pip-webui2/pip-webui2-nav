import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatIconModule, MatListModule, MatOptionModule, MatGridListModule, MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { PipNavMenuComponent } from './nav-menu.component';
import { PipNavMenuSectionComponent } from './nav-menu-section.component';

@NgModule({
  declarations: [
    PipNavMenuComponent,
    PipNavMenuSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatOptionModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    PipNavMenuComponent,
    PipNavMenuSectionComponent
  ],
  providers: [],
})
export class PipNavMenuModule { }
