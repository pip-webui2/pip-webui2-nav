import * as assert from 'assert';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material';

import { PipAppbarSecondaryActionsModule } from './appbar-secondary-actions.module';
import { PipNavPartService } from '../navpart/shared/navpart.service';
import { PipAppbarSecondaryActionsComponent } from './appbar-secondary-actions.component';


describe('a pip-appbar-secondary-actions component', () => {
	let component: PipAppbarSecondaryActionsComponent;
	let service: PipNavPartService;
	let fixture: ComponentFixture<PipAppbarSecondaryActionsComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	let navPartName = 'secondary-actions';

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				PipAppbarSecondaryActionsModule,
				BrowserAnimationsModule,
				MatMenuModule
			],
			providers: [
				PipAppbarSecondaryActionsComponent,
				PipNavPartService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipNavPartService], (navPartSErvice: PipNavPartService) => {
		fixture = TestBed.createComponent(PipAppbarSecondaryActionsComponent);
		service = navPartSErvice;
		component = fixture.componentInstance;

		de = fixture.debugElement;
		el = de.nativeElement;
	}));

	it('should show actions', () => {
		let props = { 
			actions: [
				{title: 'settings'},
				{title: 'log out'}
			]
		};

		component.pipNavPartName = navPartName;
		service.updatePartByName(navPartName, true, props);
		expect(component.config).toEqual(props);
		fixture.detectChanges();
// TODO: how to test mat-menu

		//console.log('el', el);
		//let actionItems = el.getElementsByTagName('mat-icon');
		// expect(actionItems.length).toEqual(props.actions.length);
		// for (let i = 0; i < props.actions.length; i++) {
		// 	expect(actionItems[i].innerHTML).toEqual(props.actions[i]);
		// }
	});
});