import { TestBed, async } from '@angular/core/testing';

import { MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PipSidenavHeaderComponent } from './sidenav-header.component';

import { PipNavPartService } from '../navpart/shared/navpart.service';

describe('PipSidenavHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdToolbarModule,
        MdToolbarModule,
        FlexLayoutModule,
        CommonModule,
        BrowserModule
      ],
      declarations: [
        PipSidenavHeaderComponent
      ],
      providers: [
        PipNavPartService
      ]
    }).compileComponents();
  }));

  it('should create the sidenav-header', async(() => {
    const fixture = TestBed.createComponent(PipSidenavHeaderComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
