import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PipAppbarIconComponent } from './appbar-icon.component';
import { AppbarIcon } from './shared/appbar-icon.model';

describe('a appbar-icon component', () => {
	let component: PipAppbarIconComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				PipAppbarIconComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipAppbarIconComponent], (AppbarIconComponent) => {
		component = AppbarIconComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

