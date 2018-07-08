import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary"> <span>Ristorante Con Fusion</span> </mat-toolbar>
    <app-menu></app-menu>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
