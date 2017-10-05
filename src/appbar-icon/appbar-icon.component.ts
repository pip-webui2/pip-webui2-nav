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
	@Input() pipNavPart: string;

	private subscription: Subscription;
	public icon: AppbarIcon = DefaultIcon;

	public constructor(
		private service: PipNavPartService
	) { }

	ngOnInit() {
		console.log('this.pipNavPart', this.pipNavPart);
		console.log('this.service.getPart(this.pipNavPart)', this.service.getPart(this.pipNavPart));
		if (this.pipNavPart != null && this.service.getPart(this.pipNavPart) != null) {
			console.log('subsribed in appbar icon component');
			this.subscription = this.service.updateProps(this.pipNavPart, this.icon).properties.subscribe((iconProps) => {
				this.icon = iconProps;
			});
		}
	}

	public onClick() {
		if (this.icon.action != null)
			this.icon.action();
	}

}