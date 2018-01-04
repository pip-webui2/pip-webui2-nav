import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NavItem } from './nav-item.model';

import { BreadcrumbConfig } from '../breadcrumb/shared/breadcrumb.model';
import { NavIconConfig } from '../nav-icon/shared/nav-icon.model';
import { PrimaryActionsConfig } from '../primary-actions/shared/primary-actions.model';
import { SecondaryActionsConfig } from '../secondary-actions/shared/secondary-actions.model';
import { NavHeaderConfig } from '../nav-header/shared/nav-header.model';
import { NavMenuConfig } from '../nav-menu/shared/nav-menu.model';

import { NavConfig } from './nav-config.model';

class navConfigItems {
    public static breadcrumb: 'breadcrumb';
    public static navIcon: 'navIcon';
    public static primaryActions: 'primaryActions';
    public static secondaryActions: 'secondaryActions';
    public static navHeader: 'navHeader';
    public static navMenu: 'navMenu';
}

@Injectable()
export class PipNavService {
    private _items: NavItem[];

    public constructor(
    ) { }

    public get items(): NavItem[] {
        return this._items;
    }

    public addNewItemByName(name: string, props: any): NavItem {
        let newItem: NavItem = new NavItem();
        newItem.name = name;
        newItem.properties = new BehaviorSubject<any>(props);
        this._items ? this._items.push(newItem) : this._items = [newItem];

        return this._items[this._items.length - 1];
    }

    public addNewItem(newItem: NavItem): NavItem {
        this._items ? this._items.push(newItem) : this._items = [newItem];

        return this._items[this._items.length - 1];
    }

    private updateItem(newItem: NavItem): NavItem {
        let index: number = this._items.findIndex(item => { return item.name == name });

        if (index != -1) {
            this._items[index].name = newItem.name;
            this._items[index].properties.next(newItem.properties.value);

            return this._items[index];
        } else {
            return this.addNewItem(newItem);
        }
    }

    public updateItemByName(name: string, props: any): NavItem {
        let index: number = this._items.findIndex(item => { return item.name == name });
        if (index > -1) {
            this._items[index].name = name;
            if (props != null) this._items[index].properties.next(props);

            return this._items[index];
        } else {
            return this.addNewItemByName(name, props);
        }
    }

    private updateProps(name: string, props: any): NavItem {
        let index: number = this._items.findIndex(item => { return item.name == name });
        if (index > -1) {
            this._items[index].properties.next(props);
            return this._items[index];
        } else {
            console.log('Item not found');
            return null;
        }
    }

    private updateProp(name: string, propName: string, propValue: any): NavItem {
        let index: number = this._items.findIndex(item => { return item.name == name });
        if (index > -1) {
            let props: any = this._items[index].properties.value;

            props ? props[propName] = propValue : props = { propName: propValue };
            this._items[index].properties.next(props);
           
            return this._items[index];
        } else {
            console.log('Item not found');
            return null;
        }
    }

    public getItem(name: string): NavItem {
        let index: number = this._items.findIndex(item => { return item.name == name });

        return index > -1 ? this._items[index] : null;
    }

    public showBreadcrumb(config: BreadcrumbConfig) {
        this.updateItemByName('breadcrumb', config);
    }

    public showTitle(title: string) {
        let config: BreadcrumbConfig = {
            items: [{
                title: title
            }]
        };
        this.updateItemByName('breadcrumb', config);
    }

    public showNavIcon(icon: NavIconConfig) {
        this.updateItemByName('nav-icon', icon);
    }

    public showPrimaryActions(primaryActionsConfig: PrimaryActionsConfig) {
        this.updateItemByName('primary-actions', primaryActionsConfig);
    }

    public showSecondaryActions(secondaryActionsConfig: SecondaryActionsConfig) {
        this.updateItemByName('secondary-actions', secondaryActionsConfig);
    }

    public showNavHeader(navHeader: NavHeaderConfig) {
        this.updateItemByName('nav-header', navHeader);
    }

    public showNavMenu(navMenu: NavMenuConfig) {
        this.updateItemByName('nav-menu', navMenu);
    }

    public configurateNav(navConfig: NavConfig) {
        for (let item in navConfig) {
            switch(item) {
                case navConfigItems.breadcrumb: {
                    this.showBreadcrumb(navConfig.breadcrumb);
                    break;
                }
                case navConfigItems.navIcon: {
                    this.showNavIcon(navConfig.navIcon);
                    break;
                }
                case navConfigItems.primaryActions: {
                    this.showPrimaryActions(navConfig.primaryActions);
                    break;
                }
                case navConfigItems.secondaryActions: {
                    this.showSecondaryActions(navConfig.secondaryActions);
                    break;
                }
                case navConfigItems.navHeader: {
                    this.showNavHeader(navConfig.navHeader);
                    break;
                }
                case navConfigItems.navMenu: {
                    this.showNavMenu(navConfig.navMenu);
                    break;
                }
            }
        }
    }
}