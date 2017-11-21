import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PipNavService } from '../shared/nav.service';
import { SidenavHeader } from './shared/sidenav-header.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'pip-sidenav-header',
    templateUrl: './sidenav-header.component.html',
    styleUrls: ['./sidenav-header.component.scss']
})
export class PipSidenavHeaderComponent {
    private partName: string = 'sidenav-header';

    private subscription: Subscription;

    public props: SidenavHeader;

    public constructor(
        private service: PipNavService
    ) { }

    public ngOnInit() {
        this.subscription = this.service.updatePartByName(this.partName, null).properties.subscribe((props: SidenavHeader) => {
            this.props = props;
        });
    }

    public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
