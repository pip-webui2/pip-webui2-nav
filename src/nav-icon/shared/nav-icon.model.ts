export class NavIconConfig {
    icon: string;
    action?: () => void;
}

export const DefaultIcon: NavIconConfig = {
    icon: 'menu',
    action: () => {}
}