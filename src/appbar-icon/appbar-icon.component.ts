import { Component, OnInit } from '@angular/core';
import { AppbarIcon, DefaultIcon } from './shared/appbar-icon.model';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-icon',
	templateUrl: 'appbar-icon.component.html',
	styleUrls: ['./appbar-icon.component.scss']
})

export class PipAppbarIconComponent implements OnInit {
	private subscription: Subscription;
	public icon: AppbarIcon = DefaultIcon;

	ngOnInit() {
		let name = 'icon';
	}

	public constructor() { // private service: any

	}

	public onClick() {
		if (this.icon.action != null)
			this.icon.action();
	}

}