import * as _ from 'lodash';
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
export class PipNavPartService {
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

    public addNewPartByName(name: string, visible: boolean, props: any): NavPart {
        let newPart: NavPart = new NavPart();
        newPart.name = name;
        newPart.visible = new BehaviorSubject<boolean>(visible);
        newPart.properties = new BehaviorSubject<any>(props);
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    public addNewPart(newPart: NavPart): NavPart {
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    public updatePart(newPart: NavPart): NavPart {
        let index: number = _.findIndex(this._parts, { name: newPart.name });

        if (index != -1) {
            this._parts[index].name = newPart.name;
            this._parts[index].visible.next(newPart.visible.value);
            this._parts[index].properties.next(newPart.properties.value);

            return this._parts[index];
        } else {
            return this.addNewPart(newPart);
        }
    }

    public updatePartByName(name: string, visible: boolean, props: any): NavPart {
        let index: number = _.findIndex(this._parts, (part: NavPart) => {
            return part.name == name;
        });
        if (index > -1) {
            console.log(index);
            this._parts[index].name = name;
            if (visible != null) this._parts[index].visible.next(visible);
            if (props != null) this._parts[index].properties.next(props);

            return this._parts[index];
        } else {
            return this.addNewPartByName(name, visible, props);
        }
    }

    public updateProps(name: string, props: any): NavPart {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            this._parts[index].properties.next(props);
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }

    public updateProp(name: string, propName: string, propValue: any): NavPart {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            let props: any = this._parts[index].properties.value;

            props ? props[propName] = propValue : props = { propName: propValue };
            this._parts[index].properties.next(props);
           
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }

    public changeVisibility(name: string, visible: boolean): NavPart {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            this._parts[index].visible.next(visible);
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }

    public getPart(name: string): NavPart {
        let index: number = _.findIndex(this._parts, { name: name });

        return index > -1 ? this._parts[index] : null;
    }

}