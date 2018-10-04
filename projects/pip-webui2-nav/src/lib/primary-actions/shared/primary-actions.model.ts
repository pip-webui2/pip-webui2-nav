export class PrimaryAction {
    icon: string;
    click?: any;
    subActions?: PrimarySubAction[];
}

export class PrimarySubAction {
    title: string;
    click?: any;
}

export class PrimaryActionsConfig {
    actions: PrimaryAction[];
}
