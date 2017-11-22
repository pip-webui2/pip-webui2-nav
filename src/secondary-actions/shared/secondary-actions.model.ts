export class SecondaryAction {
    title: string;
    click?: any; 
}

export class SecondaryActionsConfig {
    openMenuClick?: any;
    actions: SecondaryAction[];
}