import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class NavItem {
    name: string;
    properties: BehaviorSubject<any>;
}