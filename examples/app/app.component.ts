import { Component } from '@angular/core';
import { PipMediaService } from 'pip-webui2-layouts';

import { PipThemesService, Theme } from 'pip-webui2-themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public media: PipMediaService,
    private themesService: PipThemesService
  ) {
    media.activate();
    this.themesService.selectedTheme = this.themesService.themes[0];
  }

  public messages: any[] = [
    { image_src: '/assets/girl.png', subject: 'University', from: 'Marta', content: 'Tommorow you should visit university' },
    { image_src: '/assets/boy2.png', subject: 'Party', from: 'Sam', content: 'We are going to have a party' },
    { image_src: '/assets/girl2.png', subject: 'Cats', from: 'April', content: 'look at these kittens!!!' },
    { image_src: '/assets/boy.png', subject: 'Football', from: 'Nick', content: 'Cup is ours' }
  ];

}
