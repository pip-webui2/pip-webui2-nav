import { Component, Input, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { PipSidenavService } from './shared/sidenav.service';

@Component({
	selector: 'pip-sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})

export class PipSidenavComponent implements OnInit, AfterViewInit {

	public mode: string = 'side';
	@ViewChild('sidenav') sidenav: MdSidenav;
	
	public constructor(private service: PipSidenavService) {

	}
	ngOnInit() {

	}


	ngAfterViewInit() {
		this.service.sidenav = this.sidenav;
	}

}