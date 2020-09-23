import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep, each } from 'lodash';
import { PipSidenavService, PipMediaService, MediaMainChange } from 'pip-webui2-layouts';
import { PipNavService, NavHeaderConfig } from 'pip-webui2-nav';
import { PipThemesService, Theme } from 'pip-webui2-themes';

@Component({
    selector: 'app-navparts-example',
    templateUrl: './navparts-example.component.html',
    styleUrls: ['./navparts-example.component.scss']
})
export class NavpartsExampleComponent implements OnInit {

    private isIconShown = true;
    private isBreadcrumbShown = true;
    private isPrimaryActionsShown = true;
    private isSecondaryActionsShown = true;
    private xsIcon = 'menu';
    private gtXsIcon = 'commute';

    public appbarIconPartName = 'appbar-icon';
    public appbarBreadcrumbPartName = 'appbar-breadcrumb';
    public appbarPrimaryActionsPartName = 'appbar-primary-actions';
    public appbarSecondaryActionsPartName = 'appbar-secondary-actions';
    public breadcrumbTitle1 = 'Navigation';
    public breadcrumbTitle2 = 'Nav items configuration long text';
    public breadcrumbSearchCriteria = 'Search text';
    public sidenavMenuPartName = 'sidenav-menu';
    public sidenavHeaderPartName = 'sidenav-header';
    public isMenuShown = true;
    public isHeaderShown = true;
    public header: NavHeaderConfig = new NavHeaderConfig();

    public themes: Theme[];
    public theme: Theme;
    public languages = ['en', 'ru'];
    public language: string;
    public onBackClick: Function = null;
    public listIndex = 0;

    constructor(
        private navService: PipNavService,
        private sidenav: PipSidenavService,
        private mainMedia: PipMediaService,
        private themesService: PipThemesService,
        private translate: TranslateService
    ) {
        this.themes = this.themesService.themesArray;
        this.theme = this.themesService.currentTheme;
        // Translations init
        this.translate.addLangs(this.languages);
        this.translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
        this.language = this.translate.currentLang;

        this.mainMedia.asObservableMain().subscribe((change: MediaMainChange) => {
            const is = change.aliases.includes('xs') || change.aliases.includes('sm');
            this.navService.showNavIcon({
                fontIcon: is ? this.xsIcon : this.gtXsIcon,
                action: () => this.sidenav.start.toggle()
            });
        });

        this.navService.showNavIcon({
            fontIcon: this.gtXsIcon,
            action: () => this.sidenav.start.toggle()
        });

        this.navService.showBreadcrumb({
            searchCriteria: this.breadcrumbSearchCriteria,
            items: [
                { title: this.breadcrumbTitle1 },
                { title: this.breadcrumbTitle2 },
                { title: 'Sub tite items title' },
                { title: 'Subsub tite items text last' }
            ]
        });

        this.navService.showPrimaryActions({
            actions: [
                {
                    name: 'custom_font_icon',
                    icon: { fontIcon: 'gavel' },
                    click: () => { }
                },
                {
                    name: 'notifications',
                    icon: { fontIcon: 'notifications' },
                    click: () => {
                        this.sidenav.end.toggle();
                    }
                },
                {
                    name: 'translate',
                    icon: { fontIcon: 'translate' },
                    subActions: this.generatePrimaryActionLanguageList()
                },
                {
                    name: 'theme',
                    icon: { fontIcon: 'format_color_fill' },
                    subActions: this.generatePrimaryActionThemeList()
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
        this.header.picture = '/assets/girl.png';

        this.navService.showNavHeader(cloneDeep(this.header));
        this.navService.showNavMenu({
            sections: [
                {
                    name: 'appbar',
                    title: 'Appbar',
                    links: [
                        // tslint:disable-next-line:max-line-length
                        { name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'archive', url: 'navparts', tooltipText: 'Nav icons' },
                        { name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'navparts' },
                    ]
                },
                {
                    name: 'collapsable',
                    title: 'Actions',
                    icon: 'label_important',
                    isCollapsable: true,
                    links: [
                        // tslint:disable-next-line:max-line-length
                        { name: 'create', title: 'Create', icon: 'add', url: 'navparts', tooltipText: 'Create' },
                        { name: 'edit', title: 'Edit', icon: 'create', url: 'navparts', tooltipText: 'Edit' },
                        { name: 'delete', title: 'Delete', icon: 'delete', url: 'navparts', tooltipText: 'Delete' },
                    ]
                },
                {
                    name: 'sidenav',
                    title: 'SideNav and something else',
                    icon: 'area',
                    links: [
                        {
                            name: 'StickySideNav',
                            title: 'StickySideNav',
                            state: 'sticky_sidenav',
                            icon: 'backup',
                            url: 'navparts'
                        }
                    ]
                }
            ]
        });
    }

    ngOnInit() { }

    public changeLanguage(language: string) {
        this.language = language;
        this.translate.use(language);
    }

    public changeTheme(theme: Theme) {
        this.theme = theme;
        this.themesService.selectTheme(theme.name);
    }

    private generatePrimaryActionLanguageList() {
        const list = [];

        each(this.translate.langs, (language) => {
            this.translate.get(language).subscribe((t: string) => {
                list.push({
                    title: t,
                    click: () => {
                        this.translate.use(language);
                    }
                });
            });
        });

        return list;
    }

    private generatePrimaryActionThemeList() {
        return this.themes.map(theme => ({
            title: theme.displayName ?? theme.name,
            name: theme.name,
            click: () => this.changeTheme(theme)
        }));
    }

    public onToogleIcon(): void {
        this.isIconShown = !this.isIconShown;
    }

    public onToogleBreadcrumb(): void {
        this.isBreadcrumbShown = !this.isBreadcrumbShown;
    }

    public onTooglePrimaryActions(): void {
        this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
    }

    public onToogleSecondaryActions(): void {
        this.isSecondaryActionsShown = !this.isSecondaryActionsShown;
    }

    public onChangeIcon(): void {
        this.xsIcon = this.xsIcon === 'menu' ? 'arrow_back' : 'menu';
        this.navService.showNavIcon({
            fontIcon: this.xsIcon
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
    }

    public changeVisibleHeader() {
        this.isHeaderShown = !this.isHeaderShown;
    }

    public changeHeaderSubtitle() {
        this.navService.showNavHeader(cloneDeep(this.header));
    }

    public openSecondaryAction() {
        this.navService.toggleSecondaryActionsMenu();
    }

}
