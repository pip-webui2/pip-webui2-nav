import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PipNavService } from '../shared/nav.service';
import { NavMenuConfig } from './shared/nav-menu.model';

@Component({
    selector: 'pip-nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})

export class PipNavMenuComponent implements OnInit, OnDestroy {
    private partName = 'nav-menu';

    private subscription: Subscription;
    public config: NavMenuConfig;
    public selectedSectionIndex: number;
    public selectedItemIndex: number;
    public sections: any[] = [];

    public constructor(
        private router: Router,
        private service: PipNavService,
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
                const url = this.router.url.replace(/^\//, '');
                const selectIndex = () => {
                    for (let sk = 0; sk < this.sections.length; sk++) {
                        for (let lk = 0; lk < this.sections[sk].links.length; lk++) {
                            if (this.sections[sk].links[lk].url === url) {
                                this.selectedSectionIndex = sk;
                                this.selectedItemIndex = lk;
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

    public onItemSelect(index: number): void {
        this.selectedItemIndex = index;
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
