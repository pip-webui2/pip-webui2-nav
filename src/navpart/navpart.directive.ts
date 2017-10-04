import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { PipNavPartService } from './shared/navpart.service';

import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[pipNavPart]' })
export class PipNavPartDirective implements OnInit {
    private subscription: Subscription;
    @Input() pipNavPart: string;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private service: PipNavPartService
    ) { }

    public ngOnInit() {
        this.subscription = this.service.addNewPartByName(this.pipNavPart, true, {}).visible.subscribe(visible => {
            visible ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
        });
    } 
}