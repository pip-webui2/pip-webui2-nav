import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { AppbarIcon, DefaultIcon } from './shared/appbar-icon.model';
import { PipNavService } from '../shared/nav.service';
import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-icon',
	templateUrl: 'appbar-icon.component.html',
	styleUrls: ['./appbar-icon.component.scss']
})

export class PipAppbarIconComponent implements OnInit, OnDestroy {
	private partName: string = 'appbar-icon';

	private subscription: Subscription;
	public icon: AppbarIcon = DefaultIcon;

	public constructor(
		private service: PipNavService,
		private cd: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.subscription = this.service.addNewPartByName(this.partName, null).properties.subscribe((iconProps) => {
			this.icon = iconProps;
			this.cd.detectChanges();
		});
	}

	public onClick() {
		if (this.icon.action != null)
			this.icon.action();
	}
	
	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}