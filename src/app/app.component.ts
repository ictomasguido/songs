import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listado de Canciones', url: '/songs', icon: 'musical-notes' },
    { title: 'Info', url: '/songs', icon: 'information-circle' },
  ];
  constructor() {}
}
