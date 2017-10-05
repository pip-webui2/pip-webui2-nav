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

		let expectPart: NavPart = service.addNewPartByName('new part', true, { 'prop': 'propValue' }),
			visible: boolean,
			props: any;
		expectPart.visible.subscribe(res => visible = res);
		expectPart.properties.subscribe(res => props = res);

		expect(expectPart.name).toEqual('new part');
		expect(visible).toEqual(true);
		expect(props).toEqual({ 'prop': 'propValue' });
		expect(service.parts.length).toEqual(1);
	})

	it('add new part', () => {
		let newPart: NavPart = new NavPart(),
			expectPart: NavPart;
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>({ 'prop': 'propValue' });
		newPart.visible = new BehaviorSubject<boolean>(true);

		expectPart = service.addNewPart(newPart);

		expect(expectPart).toEqual(newPart);
		expect(service.parts.length).toEqual(1);
	})

	it('updatePart ', () => {

		let newPart: NavPart = new NavPart(),
			newPart2: NavPart = new NavPart();
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>({ 'prop': 'propValue' });
		newPart.visible = new BehaviorSubject<boolean>(true);

		newPart2.name = 'new part2';
		newPart.properties = new BehaviorSubject<any>({ 'prop': 'propValue' });
		newPart.visible = new BehaviorSubject<boolean>(false);

		expect(service.updatePart(newPart)).toEqual(newPart);
		expect(service.parts.length).toEqual(1);

		expect(service.updatePart(newPart2)).toEqual(newPart2);
		expect(service.parts.length).toEqual(2);

		service.updatePart(newPart);
		expect(service.parts.length).toEqual(2);
	})

	it('updatePart by Name', () => {

		let newPart: NavPart = new NavPart();
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>({ 'prop': 'propValue' });
		newPart.visible = new BehaviorSubject<boolean>(true);

		expect(service.updatePartByName(newPart.name, newPart.visible.getValue(), newPart.properties.getValue())).toEqual(newPart);
		expect(service.parts.length).toEqual(1);

		newPart.visible.next(false);
		expect(service.updatePartByName(newPart.name, newPart.visible.getValue(), newPart.properties.getValue())).toEqual(newPart);
		expect(service.parts.length).toEqual(1);

		newPart.name = 'new part2';
		expect(service.updatePartByName(newPart.name, newPart.visible.getValue(), newPart.properties.getValue())).toEqual(newPart);
		expect(service.parts.length).toEqual(2);
	})

	it('updateProps function should return null in part not found', () => {
		expect(service.updateProps('new part', {})).toBeNull();
	})

	it('updateProps function should return navPart if part found', () => {

		let newPart: NavPart = new NavPart(),
			expectPart: NavPart,
			props: any = { 'prop': 'propValue' };
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>(props);
		newPart.visible = new BehaviorSubject<boolean>(true);

		expectPart = service.addNewPart(newPart);
		expect(expectPart.properties.getValue()).toEqual(props);

		expectPart = service.updateProps('new part', {});
		expect(expectPart.properties.getValue()).toEqual({});
	})


	it('updateProp function should update parts in NavPartService', () => {

		let newPart: NavPart = new NavPart(),
			expectPart: NavPart,
			props: any = { 'prop': 'propValue' };
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>(props);
		newPart.visible = new BehaviorSubject<boolean>(true);

		expectPart = service.addNewPart(newPart);
		expect(expectPart.properties.getValue()).toEqual(props);

		expectPart = service.updateProp('new part', 'prop', 'propValue2');
		expect(expectPart.properties.getValue()['prop']).toEqual('propValue2');
	})

	it('updateProp function should add prop if part found and prop not found', () => {

		let newPart: NavPart = new NavPart(),
			expectPart: NavPart,
			props: any = { 'prop': 'propValue' };
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>(props);
		newPart.visible = new BehaviorSubject<boolean>(true);

		expectPart = service.addNewPart(newPart);
		expect(expectPart.properties.getValue()).toEqual(props);

		expectPart = service.updateProp('new part', 'prop2', 'propValue2');
		expect(expectPart.properties.getValue()['prop2']).toEqual('propValue2');
		expect(expectPart.properties.getValue()['prop']).toEqual('propValue');
	})

	it('updateProp function should return null in part not found', () => {
		expect(service.updateProp('new part', 'prop', 'propVal')).toBeNull();
	})

	it('changeVisibility function should add change visibility if part found', () => {

		let newPart: NavPart = new NavPart(),
			expectPart: NavPart;
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>({});
		newPart.visible = new BehaviorSubject<boolean>(true);

		expectPart = service.addNewPart(newPart);
		expect(expectPart.visible.getValue()).toEqual(true);

		expectPart = service.changeVisibility('new part', false);
		expect(expectPart.visible.getValue()).toEqual(false);
	})

	it('changeVisibility function should return null in part not found', () => {
		expect(service.changeVisibility('new part', false)).toBeNull();
	})

	it('getPart function should return part with correct name', () => {

		let newPart: NavPart = new NavPart(),
			expectPart: NavPart;
		newPart.name = 'new part';
		newPart.properties = new BehaviorSubject<any>({});
		newPart.visible = new BehaviorSubject<boolean>(true);

		service.addNewPart(newPart);
		expect(service.getPart('new part')).toEqual(newPart);
	})

	it('getPart function should return null in part not found', () => {
		expect(service.getPart('new part')).toBeNull();
	})

});