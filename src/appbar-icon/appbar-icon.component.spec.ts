import * as assert from 'assert';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipAppbarIconModule } from './appbar-icon.module';
import { PipNavPartService } from '../navpart/shared/navpart.service';

import { PipAppbarIconComponent } from './appbar-icon.component';
import { AppbarIcon } from './shared/appbar-icon.model';

describe('a pip-appbar-icon component', () => {
	let component: PipAppbarIconComponent;
	let service: PipNavPartService;
	let fixture: ComponentFixture<PipAppbarIconComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	let navPartName = 'icon';

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				PipAppbarIconModule
			],
			providers: [
				PipAppbarIconComponent,
				PipNavPartService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipNavPartService], (navPartSErvice: PipNavPartService) => {
		fixture = TestBed.createComponent(PipAppbarIconComponent);
		service = navPartSErvice;
		component = fixture.componentInstance;

		de = fixture.debugElement;
		el = de.nativeElement;
	}));

	it('should add and show icon', () => {
		let props = { 
			icon: 'menu'
		};

		component.pipNavPartName = navPartName;
		service.updatePartByName(navPartName, true, props);
		expect(component.icon).toEqual(props);
		fixture.detectChanges();
		let iconItems = el.getElementsByTagName('md-icon');

		expect(iconItems.length).toEqual(1);
		expect(iconItems[0].innerHTML).toEqual(props.icon);
	});
});
