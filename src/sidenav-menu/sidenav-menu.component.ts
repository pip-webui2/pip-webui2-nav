import * as _ from 'lodash';
import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PipNavService } from '../shared/nav.service';
import { NavMenuLink, NavMenuSection, SidenavMenuConfig } from './shared/sidenav-menu.model';

@Component({
	selector: 'pip-sidenav-menu',
	templateUrl: 'sidenav-menu.component.html',
	styleUrls: ['./sidenav-menu.component.scss']
})

export class PipSidenavMenuComponent implements OnInit {
	private partName: string = 'sidenav-menu';

	private subscription: Subscription;
	public config: SidenavMenuConfig;
	public selectedItemIndex: number;

	public constructor(
		private service: PipNavService,
		private cd: ChangeDetectorRef
	) {
		this.selectedItemIndex = 0;
	}

	ngOnInit() {
		this.subscription = this.service.addNewPartByName(this.partName, null).properties.subscribe((newConfig: SidenavMenuConfig) => {
			this.config = newConfig;
			this.cd.detectChanges();
			console.log('this.menuProps', this.config);
		});
	}

	public onItemSelect(index: number): void {
		this.selectedItemIndex = index;
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}