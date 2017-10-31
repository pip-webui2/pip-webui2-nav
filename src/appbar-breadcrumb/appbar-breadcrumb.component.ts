import { Component, ElementRef, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { PipNavPartService } from '../navpart/shared/navpart.service';

import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

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
		private service: PipNavPartService,
		private media: ObservableMedia,
		private elRef: ElementRef,
		private cd: ChangeDetectorRef
	) { }

	ngOnInit() { 
		this.media.asObservable().subscribe((change: MediaChange) => {
			this.elRef.nativeElement.classList[change.mqAlias == 'xs' ? 'add' : 'remove']('pip-mobile-appbar-breadcrumb');
			this.cd.detectChanges();
		});
	}

	public onSearchClick() {
		if (this.config.searchClick)
			this.config.searchClick(this.config.searchCriteria)
	}

	public onItemClick(item) {
		if (this.config.itemClick)
			this.config.itemClick(item)
	}
}