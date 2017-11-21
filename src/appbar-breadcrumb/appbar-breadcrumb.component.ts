import { Component, ElementRef, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { PipNavService } from '../shared/nav.service';

import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { BreadcrumbConfig } from './shared/appbar-breadcrumb.model';

@Component({
	selector: 'pip-appbar-breadcrumb',
	templateUrl: 'appbar-breadcrumb.component.html',
	styleUrls: ['./appbar-breadcrumb.component.scss']
})

export class PipAppbarBreadcrumbComponent implements OnInit {
	private partName: string = 'appbar-breadcrumb';

	private subscription: Subscription;
	public config: BreadcrumbConfig;

	public constructor(
		private service: PipNavService,
		private media: ObservableMedia,
		private elRef: ElementRef,
		private cd: ChangeDetectorRef
	) { }

	ngOnInit() { 
		this.media.asObservable().subscribe((change: MediaChange) => {
			this.elRef.nativeElement.classList[change.mqAlias == 'xs' ? 'add' : 'remove']('pip-mobile-appbar-breadcrumb');
			this.cd.detectChanges();
		});

		this.subscription = this.service.addNewPartByName(this.partName, null).properties.subscribe((breadcrumbProps: BreadcrumbConfig) => {
			this.config = breadcrumbProps;
			this.cd.detectChanges();
		});
	}

	public onSearchClick() {
		if (this.config.searchClick)
			this.config.searchClick(this.config.searchCriteria)
	}

	public onItemClick(item) {
		if (this.config.itemClick) {
			this.config.itemClick(item)
		} else {
			if (item.click) {
				item.click();
			}
		}
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}