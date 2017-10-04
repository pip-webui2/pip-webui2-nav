import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NavPart } from './navpart.model';

@Injectable()
export class NavPartService {
    private _parts: NavPart[];

    public constructor() {
        this.resetParts();
    }

    public resetParts() {
        this._parts = [];
    }

    public get parts(): NavPart[] {
        return this._parts;
    }

    public set parts(newParts: NavPart[]) {
        this._parts = newParts;
    }

    public addNewPartByName(name: string, visible: boolean, props: any): void {
        let newPart: NavPart = new NavPart();
        newPart.name = name;
        newPart.visible = new BehaviorSubject<boolean>(visible);
        newPart.properties = new BehaviorSubject<any>(props);

        this._parts ? this._parts.push(newPart) : this._parts = [newPart];
    }

    public addNewPart(newPart: NavPart) {
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];
    }

    public updatePart(newPart: NavPart) {
        let index: number = _.findIndex(this._parts, {name: name});
        if (index > -1) {
            this._parts[index].name = newPart.name;
            this._parts[index].visible.next(newPart.visible.value);
            this._parts[index].properties.next(newPart.properties.value);
        } else {
            console.log('Part not found');
        }
    }

    public updateProps(name: string, props: any) {
        let index: number = _.findIndex(this._parts, {name: name});
        if (index > -1) {
            this._parts[index].properties.next(props);
        } else {
            console.log('Part not found');
        }
    }

    public updateProp(name: string, propName: string, propValue: any) {
        let index: number = _.findIndex(this._parts, {name: name});
        if (index > -1) {
            let props: any = this._parts[index].properties.value;
            props ? props[propName] = propValue : props = {propName: propValue};
            this.updateProps(name, props);
        } else {
            console.log('Part not found');
        }
    }

    public changeVisibility(name: string, visible : boolean): void {
        let index: number = _.findIndex(this._parts, {name: name});
        if (index > -1) {
             this._parts[index].visible.next(visible);
        } else {
            console.log('Part not found');
        }
    }

}