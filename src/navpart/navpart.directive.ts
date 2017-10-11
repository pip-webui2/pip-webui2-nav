import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PipNavPartService } from './shared/navpart.service';

import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[pipNavPart]' })
export class PipNavPartDirective {
    private subscription: Subscription;
    @Input() public set pipNavPart(partName: string) {
        this.subscription = this.service.updatePartByName(partName, null, null).visible.subscribe(visible => {
            visible ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
        });
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private service: PipNavPartService
    ) { }
}