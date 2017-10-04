export class BreadcrumbItem {
    title: string = null;
    click?: (item: BreadcrumbItem) => void = null;   
    subActions?: any[] = null; 
}