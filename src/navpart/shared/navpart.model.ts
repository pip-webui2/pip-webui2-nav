import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class NavPart {
    public name: string;
    public visible: BehaviorSubject<boolean>;
    public properties: BehaviorSubject<any>;
}