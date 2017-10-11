import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PipNavPartService } from '../navpart/shared/navpart.service';
import { SidenavHeader } from './shared/sidenav-header.model';


@Component({
    selector: 'pip-sidenav-header',
    templateUrl: './sidenav-header.component.html',
    styleUrls: ['./sidenav-header.component.scss']
})
export class PipSidenavHeaderComponent {
    @Input() public set pipNavPartName(partName: string) {
        this.service.updatePartByName(partName, null, null).properties.subscribe((props) => {
            this.props = props;
        });
    }

    public props: SidenavHeader;

    public constructor(private service: PipNavPartService) { }


}
