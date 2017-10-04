import { TestBed, inject } from '@angular/core/testing';

import { PipSidenavMenuComponent } from './sidenav-menu.component';

describe('an sidenav-menu component', () => {
	let component: PipSidenavMenuComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSidenavMenuComponent
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