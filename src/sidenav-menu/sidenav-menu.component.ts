import * as _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PipNavPartService } from '../navpart/shared/navpart.service';
import {  NavMenuLink, NavMenuSection, NavMenuConfig  } from './shared/sidenav-menu.model';

@Component({
	selector: 'pip-sidenav-menu',
	templateUrl: 'sidenav-menu.component.html',
	styleUrls: ['./sidenav-menu.component.scss']
})

export class PipSidenavMenuComponent implements OnInit {

	@Input() public set pipNavPartName(partName: string) {
		this.service.updatePartByName(partName, null, null).properties.subscribe((menuProps) => {
			this.menuProps = menuProps;
		});
	}

	private subscription: Subscription;
	public menuProps: NavMenuConfig;

	public defaultIcon: string;
	public isCollapsed: boolean;
	public expanded: boolean;
	public expandedButton: boolean;

	public constructor(private service: PipNavPartService) { }

	ngOnInit() {}

}