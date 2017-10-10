import { Component, Input, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
	selector: 'pip-sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})

export class PipSidenavComponent implements OnInit, AfterViewInit  {

	public mode: string = 'side';
	@ViewChild('sidenav') sidenav: MdSidenav;
	public constructor() {
		
	}
	ngOnInit() {
		
	 }

	 
	 ngAfterViewInit() {
		// Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
		// but wait a tick first to avoid one-time devMode
		// unidirectional-data-flow-violation error

		console.log(this.sidenav);

	}

	}