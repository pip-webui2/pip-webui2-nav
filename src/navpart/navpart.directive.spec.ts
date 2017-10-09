import * as assert from 'assert';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipAppbarIconModule } from '../appbar-icon/appbar-icon.module';
import { PipNavPartService } from '../navpart/shared/navpart.service';

import { PipAppbarIconComponent } from '../appbar-icon/appbar-icon.component';
import { PipNavPartDirective } from './navpart.directive';

describe('a pipNavPart directive', () => {
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
                PipNavPartDirective,
				PipNavPartService
			]
        });
    });

	// instantiation through framework injection
	beforeEach(inject([PipNavPartService], (navPartService: PipNavPartService) => {
		//fixture = TestBed.createComponent(PipAppbarIconComponent);
        service = navPartService;
        service.updatePartByName(navPartName, true, {});
		//component = fixture.componentInstance;

		//de = fixture.debugElement;
		//el = de.nativeElement;
	}));

	it('should show component', () => {
        // TestBed.overrideComponent(PipAppbarIconComponent, {
        //     set: {
        //       template: '<div *ngNavPart="\'' + navPartName + '\'"></div>'
        //     }
        // });
		// component.pipNavPartName = navPartName;
		// service.updatePartByName(navPartName, true, props);
		// expect(component.icon).toEqual(props);
		// fixture.detectChanges();
    });
});
