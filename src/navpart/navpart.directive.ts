import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[pipNavPart]' })
export class PipNavPartDirective {
    constructor(el: ElementRef) {
       console.log('el', el);
    }
}