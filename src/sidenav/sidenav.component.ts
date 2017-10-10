import { Component, Input, OnInit, Renderer, ElementRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { PipSidenavService } from './shared/sidenav.service';

@Component({
	selector: 'pip-sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})

export class PipSidenavComponent implements OnInit, AfterViewInit {
	@ViewChild('sidenav') sidenav: MdSidenav;

	public constructor(
		private service: PipSidenavService,
		private renderer: Renderer,
		private elRef: ElementRef) {
		renderer.setElementClass(elRef.nativeElement, 'pip-sidenav', true);
	}

	ngOnInit() { }
	ngAfterViewInit() {
		this.service.sidenav = this.sidenav;
	}

}