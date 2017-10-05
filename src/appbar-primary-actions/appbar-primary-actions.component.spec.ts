import { TestBed, inject } from '@angular/core/testing';

import { AppbarPrimaryActionsComponent } from './appbar-primary-actions.component';

describe('a appbar-primary-actions component', () => {
	let component: AppbarPrimaryActionsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AppbarPrimaryActionsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AppbarPrimaryActionsComponent], (AppbarPrimaryActionsComponent) => {
		component = AppbarPrimaryActionsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});