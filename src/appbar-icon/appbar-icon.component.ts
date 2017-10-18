import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { AppbarIcon, DefaultIcon } from './shared/appbar-icon.model';
import { PipNavPartService } from '../navpart/shared/navpart.service';
import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-icon',
	templateUrl: 'appbar-icon.component.html',
	styleUrls: ['./appbar-icon.component.scss']
})

export class PipAppbarIconComponent implements OnInit, OnDestroy {
	@Input() public set pipNavPartName(partName: string) {
		this.subscription = this.service.updatePartByName(partName, null, null).properties.subscribe((iconProps) => {
			this.icon = iconProps;
			this.cd.detectChanges();
		});
	}

	private subscription: Subscription;
	public icon: AppbarIcon = DefaultIcon;

	public constructor(
		private service: PipNavPartService,
		private cd: ChangeDetectorRef
	) { }

	ngOnInit() {}

	public onClick() {
		if (this.icon.action != null)
			this.icon.action();
	}
	
	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}