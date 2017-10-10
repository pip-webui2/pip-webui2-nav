import { TestBed, inject } from '@angular/core/testing';

import { PipSidenavService } from './sidenav.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('an pip nav part service', () => {
	let service: PipSidenavService;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSidenavService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipSidenavService], (PipNavPartService) => {
		service = PipNavPartService;
	}));

	it('should have an instance', () => {
		expect(service).toBeDefined();
	});
});