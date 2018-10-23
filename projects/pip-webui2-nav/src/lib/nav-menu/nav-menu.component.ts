import { Component, EventEmitter, Input, Output, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PipSidenavService } from 'pip-webui2-layouts';
import { Subscription } from 'rxjs';

import { PipNavService } from '../shared/nav.service';
import { NavMenuConfig, NavMenuSection, NavMenuLink } from './shared/nav-menu.model';

@Component({
    selector: 'pip-nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})

export class PipNavMenuComponent implements OnInit, OnDestroy {
    private partName = 'nav-menu';

    @Input() disableDefaultSelectActions = false;

    @Output() select = new EventEmitter<number>();

    private subscription: Subscription;
    public config: NavMenuConfig;
    public selectedSectionIndex: number;
    public selectedItemIndex: number;
    public sections: NavMenuSection[] = [];

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: PipNavService,
        private sidenav: PipSidenavService,
        private cd: ChangeDetectorRef
    ) {
        this.selectedSectionIndex = 0;
        this.selectedItemIndex = 0;
    }

    ngOnInit() {
        this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((newConfig: NavMenuConfig) => {
            this.config = newConfig;
            if (this.config && this.config.sections) { this.sections = this.config.sections; }
            if (this.sections && this.sections.length) {
                const url = '/' + (this.route.snapshot.firstChild && this.route.snapshot.firstChild.url.length
                 ? this.route.snapshot.firstChild.url[0].path
                 : '');
                const selectIndex = () => {
                    for (let sk = 0; sk < this.sections.length; sk++) {
                        for (let lk = 0; lk < this.sections[sk].links.length; lk++) {
                            if (this.sections[sk].links[lk].url === url || this.sections[sk].links[lk].href === url) {
                                this.selectedSectionIndex = sk;
                                this.selectedItemIndex = lk;
                                if (!this.sections[sk].links[lk].disableTitleChange) {
                                    this.service.showTitle(this.sections[sk].links[lk].title);
                                }
                                return;
                            }
                        }
                    }
                };
                selectIndex();
            }
            this.cd.detectChanges();
        });
    }

    public isFunction(val: any): boolean {
        return typeof val === 'function';
    }

    public onItemSelect(index: number, item: NavMenuLink): void {
        this.selectedItemIndex = index;
        if (!this.disableDefaultSelectActions) {
            if (this.sidenav.isUniversal && !item.disableNavbarClose) {
                this.sidenav.closeNav();
            }
            if (!item.disableTitleChange) {
                this.service.showTitle(item.title);
            }
        }
        this.select.emit(index);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
