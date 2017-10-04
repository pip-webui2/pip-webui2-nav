import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[pipNavPart]' })
export class PipNavPartDirective {
    @Input() pipNavPart: string;

    constructor(
        //private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) {
       //
        // this.subscription = service.addPart('pipNavPart').getProp('visible').subscribe(visible => {
        //     if (visible) {
        //         this.viewContainer.createEmbeddedView(this.templateRef);
        //     } else {
        //         this.viewContainer.clear();
        //     }
        // });
    }
}