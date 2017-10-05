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
  ) { }

  public appbarIconPartName: string = 'appbar-icon';
  private isIconShown: boolean = true;
  private icon: string = 'menu'; 

  public ngOnInit() {
    
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    this.service.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }

  public onChangeIcon(): void {
    this.service.updateProp(this.appbarIconPartName, 'icon', this.icon == 'menu' ? 'back' : 'menu')
  }
}
