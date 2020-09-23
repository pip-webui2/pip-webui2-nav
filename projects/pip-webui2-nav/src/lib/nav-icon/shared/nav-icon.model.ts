export class IconConfig {
    fontSet?: string;
    fontIcon?: string;
    svgIcon?: string;
}

export class NavIconConfig extends IconConfig {
    action?: () => void;
}

export const defaultIcon: NavIconConfig = {
    fontIcon: 'menu',
    action: () => { }
};
