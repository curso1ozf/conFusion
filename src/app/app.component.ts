import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-menu></app-menu>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
