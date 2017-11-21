import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NavPart } from './navpart.model';

import { BreadcrumbConfig } from '../appbar-breadcrumb/shared/appbar-breadcrumb.model';
import { AppbarIcon } from '../appbar-icon/shared/appbar-icon.model';
import { AppbarPrimaryActionsConfig } from '../appbar-primary-actions/shared/appbar-primary-actions.model';
import { AppbarSecondaryActionsConfig } from '../appbar-secondary-actions/shared/appbar-secondary-action.model';
import { SidenavHeader } from '../sidenav-header/shared/sidenav-header.model';
import { SidenavMenuConfig } from '../sidenav-menu/shared/sidenav-menu.model';

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
        this.updatePartByName('appbar-breadcrumb', config);
    }

    public showTitle(title: string) {
        let config: BreadcrumbConfig = {
            items: [{
                title: title
            }]
        };
        this.updatePartByName('appbar-breadcrumb', config);
    }

    public showAppbarIcon(icon: AppbarIcon) {
        this.updatePartByName('appbar-icon', icon);
    }

    public showPrimaryActions(primaryActionsConfig: AppbarPrimaryActionsConfig) {
        this.updatePartByName('appbar-primary-actions', primaryActionsConfig);
    }

    public showSecondaryActions(secondaryActionsConfig: AppbarSecondaryActionsConfig) {
        this.updatePartByName('appbar-secondary-actions', secondaryActionsConfig);
    }

    public showSidenavHeader(sidenavHeader: SidenavHeader) {
        this.updatePartByName('sidenav-header', sidenavHeader);
    }

    public showSidenavMenu(sidenavMenuConfig: SidenavMenuConfig) {
        this.updatePartByName('sidenav-menu', sidenavMenuConfig);
    }
}