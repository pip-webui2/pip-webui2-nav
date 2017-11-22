import * as _ from 'lodash';
import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PipNavService } from '../shared/nav.service';
import { NavMenuLink, NavMenuSection, NavMenuConfig } from './shared/nav-menu.model';

@Component({
	selector: 'pip-nav-menu',
	templateUrl: 'nav-menu.component.html',
	styleUrls: ['./nav-menu.component.scss']
})

export class PipNavMenuComponent implements OnInit {
	private partName: string = 'nav-menu';

	private subscription: Subscription;
	public config: NavMenuConfig;
	public selectedItemIndex: number;

	public constructor(
		private service: PipNavService,
		private cd: ChangeDetectorRef
	) {
		this.selectedItemIndex = 0;
	}

	ngOnInit() {
		this.subscription = this.service.addNewPartByName(this.partName, null).properties.subscribe((newConfig: NavMenuConfig) => {
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