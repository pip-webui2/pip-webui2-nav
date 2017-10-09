import { TestBed, async } from '@angular/core/testing';

import { PipSidenavHeaderComponent } from './sidenav-header.component';

describe('PipSidenavHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipSidenavHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the sidenav-header', async(() => {
    const fixture = TestBed.createComponent(PipSidenavHeaderComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
