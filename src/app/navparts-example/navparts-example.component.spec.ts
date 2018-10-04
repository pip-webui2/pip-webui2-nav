import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpartsExampleComponent } from './navparts-example.component';

describe('NavpartsExampleComponent', () => {
  let component: NavpartsExampleComponent;
  let fixture: ComponentFixture<NavpartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpartsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
