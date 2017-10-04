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
  public isIconShown: boolean = true;

  public ngOnInit() {
    
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    this.service.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }
}
