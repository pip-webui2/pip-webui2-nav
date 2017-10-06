import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PipAppbarService {
    public class = new BehaviorSubject<string>(''); 
    public visibility = new BehaviorSubject<boolean>(true);
    public shadowVisibility = new BehaviorSubject<boolean>(false);

    public constructor() {}

    public changeShadowVisibility(visible: boolean) {
        this.shadowVisibility.next(visible);
    }

    public changeClass(newClass: string) {
        this.class.next(newClass);
    }
}