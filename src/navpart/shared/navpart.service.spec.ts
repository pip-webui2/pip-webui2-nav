import { TestBed, inject } from '@angular/core/testing';

import { PipNavPartService } from './navpart.service';

describe('an pip nav part component', () => {
	let component: PipNavPartService;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipNavPartService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipNavPartService], (PipNavPartService) => {
		component = PipNavPartService;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});