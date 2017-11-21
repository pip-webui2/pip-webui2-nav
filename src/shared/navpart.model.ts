import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class NavPart {
    name: string;
    properties: BehaviorSubject<any>;
    visible?: boolean;
}