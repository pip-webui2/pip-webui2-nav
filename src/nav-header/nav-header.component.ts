import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PipNavService } from '../shared/nav.service';
import { NavHeaderConfig } from './shared/nav-header.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'pip-nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})
export class PipNavHeaderComponent {
    private partName: string = 'nav-header';

    private subscription: Subscription;

    public props: NavHeaderConfig;

    public constructor(
        private service: PipNavService
    ) { }

    public ngOnInit() {
        this.subscription = this.service.updatePartByName(this.partName, null).properties.subscribe((props: NavHeaderConfig) => {
            this.props = props;
        });
    }

    public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
