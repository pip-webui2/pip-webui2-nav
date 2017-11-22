import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NavPart } from './navpart.model';

import { BreadcrumbConfig } from '../breadcrumb/shared/breadcrumb.model';
import { NavIcon } from '../nav-icon/shared/nav-icon.model';
import { PrimaryActionsConfig } from '../primary-actions/shared/primary-actions.model';
import { SecondaryActionsConfig } from '../secondary-actions/shared/secondary-action.model';
import { NavHeader } from '../nav-header/shared/nav-header.model';
import { NavMenuConfig } from '../nav-menu/shared/nav-menu.model';

@Injectable()
export class PipNavService {
    private _parts: NavPart[];

    public constructor(
    ) { }

    public get parts(): NavPart[] {
        return this._parts;
    }

    public addNewPartByName(name: string, props: any): NavPart {
        let newPart: NavPart = new NavPart();
        newPart.name = name;
        newPart.properties = new BehaviorSubject<any>(props);
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    public addNewPart(newPart: NavPart): NavPart {
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    private updatePart(newPart: NavPart): NavPart {
        let index: number = _.findIndex(this._parts, { name: newPart.name });

        if (index != -1) {
            this._parts[index].name = newPart.name;
            this._parts[index].properties.next(newPart.properties.value);

            return this._parts[index];
        } else {
            return this.addNewPart(newPart);
        }
    }

    public updatePartByName(name: string, props: any): NavPart {
        let index: number = _.findIndex(this._parts, (part: NavPart) => {
            return part.name == name;
        });
        if (index > -1) {
            this._parts[index].name = name;
            if (props != null) this._parts[index].properties.next(props);

            return this._parts[index];
        } else {
            return this.addNewPartByName(name, props);
        }
    }

    private updateProps(name: string, props: any): NavPart {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            this._parts[index].properties.next(props);
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }

    private updateProp(name: string, propName: string, propValue: any): NavPart {
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

    public getPart(name: string): NavPart {
        let index: number = _.findIndex(this._parts, { name: name });

        return index > -1 ? this._parts[index] : null;
    }

    public showBreadcrumb(config: BreadcrumbConfig) {
        this.updatePartByName('breadcrumb', config);
    }

    public showTitle(title: string) {
        let config: BreadcrumbConfig = {
            items: [{
                title: title
            }]
        };
        this.updatePartByName('breadcrumb', config);
    }

    public showNavIcon(icon: NavIcon) {
        this.updatePartByName('nav-icon', icon);
    }

    public showPrimaryActions(primaryActionsConfig: PrimaryActionsConfig) {
        this.updatePartByName('primary-actions', primaryActionsConfig);
    }

    public showSecondaryActions(secondaryActionsConfig: SecondaryActionsConfig) {
        this.updatePartByName('secondary-actions', secondaryActionsConfig);
    }

    public showNavHeader(NavHeader: NavHeader) {
        this.updatePartByName('nav-header', NavHeader);
    }

    public showNavMenu(NavMenuConfig: NavMenuConfig) {
        this.updatePartByName('nav-menu', NavMenuConfig);
    }
}