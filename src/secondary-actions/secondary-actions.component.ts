import { Component, OnInit, Input } from '@angular/core';
import { PipNavService } from '../shared/nav.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-secondary-actions',
	templateUrl: 'secondary-actions.component.html',
	styleUrls: ['./secondary-actions.component.scss']
})

export class PipSecondaryActionsComponent implements OnInit {
	private partName: string = 'secondary-actions';

	private subscription: Subscription;
	public config: any;

	public constructor(
		private service: PipNavService
	) { }

	ngOnInit() { 
		this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((actionsProp) => {
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