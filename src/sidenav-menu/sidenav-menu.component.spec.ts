import { TestBed, inject } from '@angular/core/testing';

import { PipSidenavMenuComponent } from './sidenav-menu.component';
import { PipNavPartService } from '../navpart/shared/navpart.service';

describe('an sidenav-menu component', () => {
	let component: PipSidenavMenuComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSidenavMenuComponent,
				PipNavPartService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipSidenavMenuComponent], (PipSidenavMenuComponent) => {
		component = PipSidenavMenuComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});