import { Component, Input, OnInit } from '@angular/core';
import { PipAppbarService } from './shared/appbar.service';

@Component({
	selector: 'pip-appbar',
	templateUrl: 'appbar.component.html',
	styleUrls: ['./appbar.component.scss']
})

export class PipAppbarComponent implements OnInit {
	public class: string;
	
	constructor(
		private service: PipAppbarService
	) { }

	ngOnInit() { 
		this.service.class.subscribe(classes => this.class = classes);
		this.service.shadowVisibility.subscribe((shadowVisibility) => {
			shadowVisibility ? this.class = this.service.class.getValue() + ' appbar-shadow' : this.service.class.getValue();
		});
	}
}