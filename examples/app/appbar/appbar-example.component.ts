import { Component } from '@angular/core';
import { PipNavPartService } from '../pip-webui2-nav';

@Component({
  selector: 'appbar-example',
  templateUrl: './appbar-example.component.html',
  styleUrls: ['./appbar-example.component.scss']
})
export class AppBarExampleComponent {
  public appbarIconPartName: string = 'appbar-icon';
  public appbarBreadcrumbPartName: string = 'appbar-breadcrumb';
  public appbarPrimaryActionsPartName: string = 'appbar-primary-actions';
  public breadcrumbTitle1: string = 'Title 1';
  public breadcrumbTitle2: string = 'Title 2';

  private isIconShown: boolean = false;
  private isBreadcrumbShown: boolean = false;
  private isPrimaryActionsShown: boolean = false;
  private icon: string = 'menu';

  constructor(
    private service: PipNavPartService
  ) {
    this.service.updatePartByName(this.appbarIconPartName, this.isIconShown, {
      icon: this.icon,
      action: () => {
        console.log('clicked on icon');
      }
    });

    this.service.updatePartByName(this.appbarBreadcrumbPartName, this.isBreadcrumbShown, {
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });

    this.service.updatePartByName(this.appbarPrimaryActionsPartName, this.isPrimaryActionsShown, {
      actions: [
        {
          icon: 'notifications', click: () => {
            console.log('clicked on "Notifications"');
          }
        },
        {
          icon: 'cloud', subActions: [
            { title: 'Upload', click: () => {
              console.log('clicked on "Upload"');
            } },
            { title: 'Open cloud' }
          ]
        }
      ]
    });
  }

  public ngOnInit() {
    console.log('this.service.parts', this.service.parts);
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    this.service.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }

  public onToogleBreadcrumb(): void {
    this.isBreadcrumbShown = !this.isBreadcrumbShown;
    this.service.changeVisibility(this.appbarBreadcrumbPartName, this.isBreadcrumbShown);
  }

  public onTooglePrimaryActions(): void {
    this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
    this.service.changeVisibility(this.appbarPrimaryActionsPartName, this.isPrimaryActionsShown);
  }

  public onChangeIcon(): void {
    this.icon = this.icon == 'menu' ? 'arrow_back' : 'menu';
    this.service.updateProp(this.appbarIconPartName, 'icon', this.icon);
  }

  public onChangeBreadcrumb(): void {
    this.service.updateProp(this.appbarBreadcrumbPartName, 'items', [
      { title: this.breadcrumbTitle1 },
      { title: this.breadcrumbTitle2 }
    ]);
  }
}
