import { TestBed, inject } from '@angular/core/testing';

import { AppbarBreadcrumbComponent } from './appbar-breadcrumb.component';

describe('a appbar-breadcrumb component', () => {
	let component: AppbarBreadcrumbComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AppbarBreadcrumbComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AppbarBreadcrumbComponent], (AppbarBreadcrumbComponent) => {
		component = AppbarBreadcrumbComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});