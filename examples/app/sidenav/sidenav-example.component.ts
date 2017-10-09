import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PipNavPartService, SidenavHeader } from '../pip-webui2-nav';

@Component({
	selector: 'sidenav-example',
	templateUrl: 'sidenav-example.component.html',
	styleUrls: ['./sidenav-example.component.scss']
})

export class SidenavExampleComponent {

	public sidenavMenuPartName: string = 'sidenav-menu';
	public sidenavHeaderPartName: string = 'sidenav-header';

	public isMenuShown: boolean = false;
	public isHeaderShown: boolean = false;

	public header: SidenavHeader = new SidenavHeader();

	constructor(private service: PipNavPartService) {

		this.header.title = 'Kate Negrienko';
		this.header.subtitle = 'frontend developer';

		this.service.updatePartByName(this.sidenavHeaderPartName, this.isHeaderShown,  _.cloneDeep(this.header));
		this.service.updatePartByName(this.sidenavMenuPartName, this.isMenuShown, {
			sections : [
				{
					title: 'Appbar',
					icon: 'goal',
					links: [
						{ name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'archive', url: 'nav_icons', controller: 'IconsController', tooltipText: 'Nav icons' },
						{ name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'titles', controller: 'TitlesController' },
					]
				},
				{
					title: 'SideNav tvh ybhjnyubj nyukbygjbnyuhbjygbh',
					icon: 'area',
					links: [
						{ name: 'StickySideNav', title: 'StickySideNav ghfvdb ygbh ghbnyujnyubj  yubhj', state: 'sticky_sidenav', icon: 'backup', url: 'sticky_sidenav', controller: 'StickySideNavController'},
						//{ name: 'Navigations', title: 'Navigations', state: 'navigations', icon: 'icons:preview', url: '/navigations', controller: 'NavigationsController', templateUrl: 'navigations.html' }
					]
				}
			]
		});
	  }
	
	  public ngOnInit() {
		console.log('this.service.parts', this.service.parts);
		}
		

		public changeVisibleMenu() {
			this.isMenuShown = !this.isMenuShown;
			this.service.changeVisibility(this.sidenavMenuPartName, this.isMenuShown);
		}

		public changeVisibleHeader() {
			this.isHeaderShown = !this.isHeaderShown;
			this.service.changeVisibility(this.sidenavHeaderPartName, this.isHeaderShown);
		}

		public changeHeaderSubtitle() {
			this.service.updateProps(this.sidenavHeaderPartName, _.cloneDeep(this.header));	
		}
}

