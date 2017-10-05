import { Component, Input, OnInit } from '@angular/core';
import { PipNavPartService } from '../navpart/shared/navpart.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'pip-appbar-breadcrumb',
	templateUrl: 'appbar-breadcrumb.component.html',
	styleUrls: ['./appbar-breadcrumb.component.scss']
})

export class PipAppbarBreadcrumbComponent implements OnInit {
	@Input() public set pipNavPartName(partName: string) {
		this.service.updatePartByName(partName, null, null).properties.subscribe((breadcrumbProps) => {
			this.config = breadcrumbProps;
		});
	}

	private subscription: Subscription;
	public config: any;

	public constructor(
		private service: PipNavPartService
	) { }

	ngOnInit() { }

	public onSearchClick() {
		if (this.config.searchClick)
			this.config.searchClick(this.config.searchCriteria)
	}

	public onItemClick(item) {
		if (this.config.itemClick)
			this.config.itemClick(item)
	}
}