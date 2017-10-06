import { TestBed, inject } from '@angular/core/testing';

import { PipAppbarSecondaryActionsComponent } from './appbar-secondary-actions.component';

describe('a appbar-secondary-actions component', () => {
	let component: PipAppbarSecondaryActionsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipAppbarSecondaryActionsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipAppbarSecondaryActionsComponent], (AppbarSecondaryActionsComponent) => {
		component = AppbarSecondaryActionsComponent;
	}));

	/*it('should have an instance', () => {
		expect(component).toBeDefined();
	});*/
});