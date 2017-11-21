export class AppbarPrimaryAction {
    icon: string;
    click?: any; 
    subActions?: AppbarPrimarySubAction[];
}

export class AppbarPrimarySubAction {
    title: string;
    click?: any; 
}

export class AppbarPrimaryActionsConfig {
    actions: AppbarPrimaryAction[]
}