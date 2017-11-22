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
	public sections: any[] = [];

	public constructor(
		private service: PipNavService,
		private cd: ChangeDetectorRef
	) {
		this.selectedItemIndex = 0;
	}

	ngOnInit() {
		this.subscription = this.service.updatePartByName(this.partName, null).properties.subscribe((newConfig: NavMenuConfig) => {
			this.config = newConfig;
			if (this.config && this.config.sections) this.sections = this.config.sections;
			this.cd.detectChanges();
		});
	}

	public onItemSelect(index: number): void {
		this.selectedItemIndex = index;
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}