import { Component } from '@angular/core';
import { PipNavPartService } from '../pip-webui2-nav';

@Component({
	selector: 'sidenav-example',
	templateUrl: 'sidenav-example.component.html'
})

export class SidenavExampleComponent {

	public sidenavMenuPartName: string = 'sidenav-menu';
	public sidenavHeaderPartName: string = 'sidenav-header';

	public isMenuShown: boolean = true;

	constructor(
		private service: PipNavPartService
	  ) {
		this.service.updatePartByName(this.sidenavMenuPartName, this.isMenuShown, {
		 
		});
	  }
	
	  public ngOnInit() {
		console.log('this.service.parts', this.service.parts);
	  }
}