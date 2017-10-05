import { TestBed, inject } from '@angular/core/testing';

import { PipNavPartService } from './navpart.service';
import { NavPart } from './navpart.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('an pip nav part service', () => {
	let service: PipNavPartService;

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
		service = PipNavPartService;
	}));

	it('should have an instance', () => {
		expect(service).toBeDefined();
	});

	it('get and set parts', () => {
		let parts: NavPart[] = [];
		parts.push(new NavPart());
		service.parts = parts;
		expect(service.parts).toEqual(parts);
	})

	it('reset parts', () => {
		let parts: NavPart[] = [];
		parts.push(new NavPart());
		service.parts = parts;
		service.resetParts();
		expect(service.parts.length).toEqual(0);
	})

	it('add new part by name', () => {
	
		let expectPart: NavPart = service.addNewPartByName('new part', true, { 'prop': 'propValue'}),
			visible: boolean, 
			props: any;
		expectPart.visible.subscribe(res => visible = res);
		expectPart.properties.subscribe(res => props = res);

		expect(expectPart.name).toEqual('new part');
		expect(visible).toEqual(true);
		expect(props).toEqual({ 'prop': 'propValue'});
	})

});