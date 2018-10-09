import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PipNavService } from '../shared/nav.service';

@Component({
    selector: 'pip-secondary-actions',
    templateUrl: 'secondary-actions.component.html',
    styleUrls: ['./secondary-actions.component.scss']
})

export class PipSecondaryActionsComponent implements OnInit, OnDestroy {
    private partName = 'secondary-actions';

    private subscription: Subscription;
    public config: any;

    public constructor(
        private service: PipNavService
    ) { }

    public ngOnInit() {
        this.subscription = this.service.updateItemByName(this.partName, null).properties.subscribe((actionsProp) => {
            this.config = actionsProp;
        });
    }

    public onActionClick(action) {
        if (action.click != null) {
            action.click();
        }
    }

    public onOpenActionsMenu() {
        if (this.config.openMenuClick) {
            this.config.openMenuClick();
        }
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
