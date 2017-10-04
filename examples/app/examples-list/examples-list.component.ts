import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'examples-list',
	templateUrl: 'examples-list.component.html',
	styleUrls: ['./examples-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class ExamplesListComponent {
	@Input() list: any[];
	@Input() selectedItemIndex: number;
	@Output() selectedItemIndexChange = new EventEmitter();

	public onItemSelect(index: number): void {
		this.selectedItemIndex = index;
		this.selectedItemIndexChange.emit(index);
    }
}