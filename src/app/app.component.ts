import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'autos-microfront';
  handlerClick(page: string) {
    document.cookie = `version=${page}`;
    window.location.reload()
  }
}
