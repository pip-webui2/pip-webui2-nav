import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'pip-appbar',
	templateUrl: 'appbar.component.html',
	styleUrls: ['./appbar.component.scss']
})

export class PipAppbarComponent implements OnInit {
	@Input() class: string;

	ngOnInit() { }
}