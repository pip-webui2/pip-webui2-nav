import { TestBed, inject } from '@angular/core/testing';

import { PipSidenavContainerComponent } from './sidenav-container.component';

describe('an sidenav-container component', () => {
	let component: PipSidenavContainerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSidenavContainerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipSidenavContainerComponent], (PipSidenavContainerComponent) => {
		component = PipSidenavContainerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});