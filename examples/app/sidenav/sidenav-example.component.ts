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
			sections : [
				{
					title: 'Appbar',
					icon: 'icons:goal',
					links: [
						{ name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'icons:archive', url: '/nav_icons', controller: 'IconsController', tooltipText: 'Nav icons' },
						{ name: 'Titles', title: 'Titles', state: 'titles', icon: 'icons:list', url: '/titles', controller: 'TitlesController' },
					]
				},
				{
					title: 'SideNav',
					icon: 'icons:area',
					links: [
						{ name: 'StickySideNav', title: 'StickySideNav', state: 'sticky_sidenav', icon: 'icons:submenu', url: '/sticky_sidenav', controller: 'StickySideNavController'},
						//{ name: 'Navigations', title: 'Navigations', state: 'navigations', icon: 'icons:preview', url: '/navigations', controller: 'NavigationsController', templateUrl: 'navigations.html' }
					]
				}
			]
		});
	  }
	
	  public ngOnInit() {
		console.log('this.service.parts', this.service.parts);
	  }
}

