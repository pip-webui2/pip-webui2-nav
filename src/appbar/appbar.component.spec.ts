import { TestBed, inject } from '@angular/core/testing';

import { PipAppbarComponent } from './appbar.component';

describe('an appbar component', () => {
	let component: PipAppbarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipAppbarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipAppbarComponent], (PipAppbarComponent) => {
		component = PipAppbarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});