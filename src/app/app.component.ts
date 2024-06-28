import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  public sidebarItems: any[] = [
    {
      name: 'home',
      url: '/home',
      icon:'dashboard'
    },
    {
      name: 'list',
      url: '/list',
      icon:'dashboard'
    },
    {
      name: 'statistic',
      url: '/statistic',
      icon:'dashboard'
    },
  ]
}
