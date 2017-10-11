import { TestBed, inject } from '@angular/core/testing';

import { PipSidenavComponent } from './sidenav.component';
import { PipSidenavService } from './shared/sidenav.service';

describe('an sidenav component', () => {
	let component: PipSidenavComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSidenavComponent,
				PipSidenavService 
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipSidenavComponent], (PipSidenavComponent) => {
		component = PipSidenavComponent;
	}));
	/*it('should have an instance', () => {
		expect(component).toBeDefined();

	});*/
});