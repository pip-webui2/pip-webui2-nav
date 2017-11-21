import { Component, OnInit, Input } from '@angular/core';
import { PipNavService } from '../shared/nav.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-secondary-actions',
	templateUrl: 'appbar-secondary-actions.component.html',
	styleUrls: ['./appbar-secondary-actions.component.scss']
})

export class PipAppbarSecondaryActionsComponent implements OnInit {
	private partName: string = 'appbar-secondary-actions';

	private subscription: Subscription;
	public config: any;

	public constructor(
		private service: PipNavService
	) { }

	ngOnInit() { 
		this.subscription = this.service.addNewPartByName(this.partName, null).properties.subscribe((actionsProp) => {
			this.config = actionsProp;
		});
	}

	public onActionClick(action) {
		if (action.click != null) {
			action.click();
		}
	}

	public onOpenActionsMenu() {
		if (this.config.openMenuClick)
		this.config.openMenuClick();
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}