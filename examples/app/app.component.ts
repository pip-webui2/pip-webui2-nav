import { Component } from '@angular/core';
import { PipMediaService } from 'pip-webui2-layouts';

import { PipThemesService, Theme } from 'pip-webui2-themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public themes: Theme[];
  public selectedTheme: Theme;

  constructor(
    public media: PipMediaService,
    private themesService: PipThemesService
  ) {
    media.activate();

    this.themes = this.themesService.themes;
    this.selectTheme(this.themesService.themes[0]);
  }

  private selectTheme(selectedTheme) {
    this.themesService.selectedTheme = selectedTheme;
    this.selectedTheme = selectedTheme;
  }

  public list: any[] = [
    {
      name: 'Appbar', id: 'appbar', route: 'appbar'
    },
    {
      name: 'Sidenav', id: 'sidenav', route: 'sidenav'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;
    
  }
}
