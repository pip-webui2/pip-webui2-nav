export class NavIcon {
    icon: string;
    action?: () => void;
}

export const DefaultIcon: NavIcon = {
    icon: 'menu',
    action: () => {}
}