import { IconConfig } from '../../nav-icon/shared/nav-icon.model';

export class PrimaryAction {
    icon: IconConfig;
    name: string;
    count?: number;
    click?: any;
    subActions?: PrimarySubAction[];
}

export class PrimarySubAction {
    title: string;
    name?: string;
    click?: any;
}

export class PrimaryActionsConfig {
    actions: PrimaryAction[];
}
