import { Component, OnInit, Input } from '@angular/core';
import { PipNavService } from '../shared/nav.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-primary-actions',
	templateUrl: 'primary-actions.component.html',
	styleUrls: ['./primary-actions.component.scss']
})

export class PipPrimaryActionsComponent implements OnInit {
	private partName: string = 'primary-actions';

	private subscription: Subscription;
	public config: any;

	public constructor(
		private service: PipNavService
	) { }

	ngOnInit() { 
		this.subscription = this.service.updatePartByName(this.partName, null).properties.subscribe((actionsProp) => {
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