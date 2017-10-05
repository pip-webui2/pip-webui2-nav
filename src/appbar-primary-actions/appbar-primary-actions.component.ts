import { Component, OnInit, Input } from '@angular/core';
import { PipNavPartService } from '../navpart/shared/navpart.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-primary-actions',
	templateUrl: 'appbar-primary-actions.component.html',
	styleUrls: ['./appbar-primary-actions.component.scss']
})

export class PipAppbarPrimaryActionsComponent implements OnInit {
	@Input() public set pipNavPartName(partName: string) {
		this.service.updatePartByName(partName, null, null).properties.subscribe((actionsProp) => {
			this.config = actionsProp;
		});
	}

	private subscription: Subscription;
	public config: any;

	public constructor(
		private service: PipNavPartService
	) { }

	ngOnInit() { }

	public onActionClick(action) {
		if (action.click != null) {
			action.click();
		}
	}
}