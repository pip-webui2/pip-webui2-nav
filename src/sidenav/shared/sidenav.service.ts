import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MdSidenav } from '@angular/material';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PipSidenavService {
    public _sidenav: MdSidenav;
    private _side$: BehaviorSubject<string> = new BehaviorSubject('side');
    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public mode: string = 'side';

    public constructor() { }

    public get sidenav(): MdSidenav {
        return this._sidenav;
    }

    public set sidenav(sidenav: MdSidenav) {
        this._sidenav = sidenav;
    }

    public get side() {
        return this._side$;
    }

    public set side(s: BehaviorSubject<string>) {
        this._side$ = s;
        this.mode = this._side$.value;
    }

    public get opened(): BehaviorSubject<boolean> {
        return this._opened$;
    }

    public set opened(open: BehaviorSubject<boolean>) {
        this._opened$ = open;
    }

    public toggleNav(sidenav: MdSidenav = this._sidenav) {
        if (sidenav) {
            sidenav.toggle();
        } else { console.log('Sidenav not found'); }
    }

    public openNav(sidenav: MdSidenav = this._sidenav) {
        if (sidenav) {
            sidenav.open();
        } else {
            console.log('Sidenav not found');
        }

    }

    public closeNav(sidenav: MdSidenav = this._sidenav) {
        if (sidenav) {
            sidenav.close();
        } else {
            console.log('Sidenav not found');
        }
    }

    public changeStateNav(sidenav: MdSidenav = this._sidenav) {
        if (sidenav) {

        } else {
            console.log('Sidenav not found');
        }
    }

}