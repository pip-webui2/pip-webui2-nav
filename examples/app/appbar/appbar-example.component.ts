import { Component } from '@angular/core';
import { PipNavPartService } from '../pip-webui2-nav';

@Component({
  selector: 'appbar-example',
  templateUrl: './appbar-example.component.html',
  styleUrls: ['./appbar-example.component.scss']
})
export class AppBarExampleComponent {
  constructor(
    private service: PipNavPartService
  ) { 
    this.service.updatePartByName(this.appbarIconPartName, this.isIconShown, {
      icon: this.icon,
      action: () => {
        console.log('clicked on icon');
      }
    });
  }

  public appbarIconPartName: string = 'appbar-icon';
  private isIconShown: boolean = false;
  private icon: string = 'menu'; 

  public ngOnInit() {
    console.log('this.service.parts', this.service.parts);
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    this.service.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }

  public onChangeIcon(): void {
    this.icon = this.icon == 'menu' ? 'arrow_back' : 'menu';
    this.service.updateProp(this.appbarIconPartName, 'icon', this.icon);
  }
}
