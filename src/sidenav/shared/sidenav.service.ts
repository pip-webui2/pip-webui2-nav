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

    public constructor() { }

    public get sidenav(): MdSidenav {
        return this._sidenav;
    }

    public set sidenav(sidenav: MdSidenav) {
        this._sidenav = sidenav;
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