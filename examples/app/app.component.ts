import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    
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
