import { Component, OnInit, Input } from '@angular/core';
import { PipNavService } from '../shared/nav.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-primary-actions',
	templateUrl: 'appbar-primary-actions.component.html',
	styleUrls: ['./appbar-primary-actions.component.scss']
})

export class PipAppbarPrimaryActionsComponent implements OnInit {
	private partName: string = 'appbar-primary-actions';

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

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}