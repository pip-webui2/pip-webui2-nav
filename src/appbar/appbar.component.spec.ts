import * as assert from 'assert';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PipAppbarModule } from './appbar.module';
import { PipAppbarComponent } from './appbar.component';
import { PipAppbarService } from './shared/appbar.service';

describe('an appbar component and appbar service', () => {
	let component: PipAppbarComponent;
	let service: PipAppbarService;
	let fixture: ComponentFixture<PipAppbarComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				PipAppbarModule
			],
			providers: [
				PipAppbarComponent,
				PipAppbarService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipAppbarService], (appbarService: PipAppbarService) => {
		fixture = TestBed.createComponent(PipAppbarComponent);
		service = appbarService;
		component = fixture.componentInstance;
		
		de = fixture.debugElement;
		el = de.nativeElement;
	}));


	it('should add a class', () => {
		let className: string = 'some-class';
		service.changeClass(className);
		fixture.detectChanges();

		expect(el.getElementsByTagName('md-toolbar')[0].className).toContain(className);
	});

	it('should show shadow', () => {
		let shadowClass = 'appbar-shadow';
		service.changeShadowVisibility(true);
		fixture.detectChanges();

		expect(el.getElementsByTagName('md-toolbar')[0].className).toContain(shadowClass);
	});

	it('should hide shadow', () => {
		let shadowClass = 'appbar-shadow';
		service.changeShadowVisibility(false);
		fixture.detectChanges();

		expect(el.getElementsByTagName('md-toolbar')[0].className.search(shadowClass) < 0).toBeTruthy();
	});
});