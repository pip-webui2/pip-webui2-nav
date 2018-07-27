import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PipNavService, NavHeaderConfig, PrimaryActionsConfig } from '../pip-webui2-nav';
import { PipSidenavService, PipMediaService, MediaMainChange, PipRightnavService } from 'pip-webui2-layouts';

import { PipThemesService, Theme } from 'pip-webui2-themes';

@Component({
  selector: 'navparts-example',
  templateUrl: './navparts-example.component.html',
  styleUrls: ['./navparts-example.component.scss']
})
export class NavPartsExampleComponent {
  public appbarIconPartName: string = 'appbar-icon';
  public appbarBreadcrumbPartName: string = 'appbar-breadcrumb';
  public appbarPrimaryActionsPartName: string = 'appbar-primary-actions';
  public appbarSecondaryActionsPartName: string = 'appbar-secondary-actions';
  public breadcrumbTitle1: string = 'Navigation';
  public breadcrumbTitle2: string = 'Nav items configuration long text';
  public breadcrumbSearchCriteria: string = 'Search text';

  private isIconShown: boolean = true;
  private isBreadcrumbShown: boolean = true;
  private isPrimaryActionsShown: boolean = true;
  private isSecondaryActionsShown: boolean = true;
  private xsIcon: string = 'menu';
  private gtXsIcon: string = 'ice-cup';

  public sidenavMenuPartName: string = 'sidenav-menu';
  public sidenavHeaderPartName: string = 'sidenav-header';

  public isMenuShown: boolean = true;
  public isHeaderShown: boolean = true;

  public header: NavHeaderConfig = new NavHeaderConfig();

  public themes: Theme[];
  public selectedTheme: Theme;

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private mainMedia: PipMediaService,
    private themesService: PipThemesService
  ) {
    this.mainMedia.asObservableMain().subscribe((change: MediaMainChange) => {
      let is = change.aliases.includes('xs') || change.aliases.includes('sm');
      this.navService.showNavIcon({
        fontSet: 'ice',
        icon: is ? this.xsIcon : this.gtXsIcon,
        action: is ? () => {
          this.sidenav.toggleNav();
        } : null
      });
    });

    this.navService.showNavIcon({
      icon: this.gtXsIcon
    });

    this.navService.showBreadcrumb({
      searchCriteria: this.breadcrumbSearchCriteria,
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });

    this.navService.showPrimaryActions({
      actions: [
        {
          icon: 'notifications', click: () => {
            this.rightnav.toggleRightnav();
          }
        },
        {
          icon: 'format_color_fill', subActions: this.generatePrimaryActionThemeList()
        }
      ]
    });

    this.navService.showSecondaryActions({
      actions: [
        { title: 'Settings' },
        { title: 'Sign out' }
      ]
    });

    this.header.title = 'Kate Negrienko';
    this.header.subtitle = 'frontend developer';
    this.header.picture = "/assets/girl.png";

    this.navService.showNavHeader(_.cloneDeep(this.header));
    this.navService.showNavMenu({
      sections: [
        {
          name: 'appbar',
          title: 'Appbar',
          //icon: 'goal',
          links: [
            { name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'archive', url: 'navparts', tooltipText: 'Nav icons' },
            { name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'navparts' },
          ]
        },
        {
          name: 'sidenav',
          title: 'SideNav and something else',
          icon: 'area',
          links: [
            { name: 'StickySideNav', title: 'StickySideNav ghfvdb ygbh ghbnyujnyubj  yubhj', state: 'sticky_sidenav', icon: 'backup', url: 'navparts' }
          ]
        }
      ]
    });
  }

  private selectTheme(selectedTheme) {
    this.themesService.selectedTheme = selectedTheme;
    this.selectedTheme = selectedTheme;
  }

  public ngOnInit() {
    this.selectTheme(this.themesService.selectedTheme);
  }

  private generatePrimaryActionThemeList() {
    let list = [];

    _.each(this.themesService.themes, (theme) => {
      list.push({
        title: theme.name, click: () => {
          this.selectTheme(theme);
        }
      })
    });

    return list;
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    //this.navService.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }

  public onToogleBreadcrumb(): void {
    this.isBreadcrumbShown = !this.isBreadcrumbShown;
    //this.navService.changeVisibility(this.appbarBreadcrumbPartName, this.isBreadcrumbShown);
  }

  public onTooglePrimaryActions(): void {
    this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
    //this.navService.changeVisibility(this.appbarPrimaryActionsPartName, this.isPrimaryActionsShown);
  }

  public onToogleSecondaryActions(): void {
    this.isSecondaryActionsShown = !this.isSecondaryActionsShown;
    //this.navService.changeVisibility(this.appbarSecondaryActionsPartName, this.isSecondaryActionsShown);
  }

  public onChangeIcon(): void {
    this.xsIcon = this.xsIcon == 'menu' ? 'arrow_back' : 'menu';
    this.navService.showNavIcon({
      icon: this.xsIcon
    });
  }

  public onChangeBreadcrumb(): void {
    this.navService.showBreadcrumb({
      searchCriteria: this.breadcrumbSearchCriteria,
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });
  }

  public changeVisibleMenu() {
    this.isMenuShown = !this.isMenuShown;
    //this.navService.changeVisibility(this.sidenavMenuPartName, this.isMenuShown);
  }

  public changeVisibleHeader() {
    this.isHeaderShown = !this.isHeaderShown;
    //this.navService.changeVisibility(this.sidenavHeaderPartName, this.isHeaderShown);
  }

  public changeHeaderSubtitle() {
    this.navService.showNavHeader(_.cloneDeep(this.header));
  }
}
