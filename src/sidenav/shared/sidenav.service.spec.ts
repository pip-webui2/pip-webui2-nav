import { TestBed, inject } from '@angular/core/testing';
import { Component, Renderer, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { MatSidenavModule } from '@angular/material'

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
	beforeEach(inject([PipSidenavService], (PipSidenavService) => {
		service = PipSidenavService;
	}));

	it('should have an instance', () => {
		expect(service).toBeDefined();
	});

	it('toggleNav function shound call toggle function if sidenav component found', () => {
		/*let sidenav: MdSidenav = new MdSidenav(new ElementRef(null), null, {});
		sidenav.toggle = () => {
			sidenav.opened = !sidenav.opened;
			return null;
		};
		sidenav.opened = true;
		sidenav.open = () => {
			sidenav.opened = true;
			return null;
		}

		service.sidenav = sidenav;
		service.toggleNav();
		expect(service.sidenav).toBeDefined();
		expect(service.sidenav.opened).toBeFalsy();*/
	});
});