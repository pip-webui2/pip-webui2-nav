import { Component, OnInit, Input } from '@angular/core';
import { AppbarIcon, DefaultIcon } from './shared/appbar-icon.model';
import { PipNavPartService } from '../navpart/shared/navpart.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-icon',
	templateUrl: 'appbar-icon.component.html',
	styleUrls: ['./appbar-icon.component.scss']
})

export class PipAppbarIconComponent implements OnInit {
	@Input() public set pipNavPartName(partName: string) {
		this.service.updatePartByName(partName, null, null).properties.subscribe((iconProps) => {
			this.icon = iconProps;
		});
	}

	private subscription: Subscription;
	public icon: AppbarIcon = DefaultIcon;

	public constructor(
		private service: PipNavPartService
	) { }

	ngOnInit() {}

	public onClick() {
		console.log('click', this.icon);
		if (this.icon.action != null)
			this.icon.action();
	}

}