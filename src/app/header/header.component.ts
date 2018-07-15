import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <span><img src="/assets/images/logo.png" height=30 width=41></span>
    <a mat-button><span class="fa fa-home fa-lg"></span> Home</a>
    <a mat-button><span class="fa fa-info fa-lg"></span> About</a>
    <a mat-button><span class="fa fa-list fa-lg"></span> Menu</a>
    <a mat-button><span class="fa fa-address-card fa-lg"></span> Contact</a>
  </mat-toolbar>

  <div class="container jumbotron"
      fxLayout="row"
      fxLayout.sm="column" 
      fxLayout.xs="column" 
      fxLayoutAlign.xs="start center"
      fxLayoutAlign.sm="start center" 
      fxLayoutAlign.gt-sm="center center" 
      fxLayoutGap="10px">

    <div fxFlex fxFlex.gt-sm="50%">
      <h1>Ristorante Con Fusion</h1>
      <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations
        will tickle your culinary senses!</p>
    </div>
    <div fxFlex fxFlex.gt-sm="20%">
      <img src="/assets/images/logo.png" alt="Logo">
    </div>
    <div fxFlex></div>
  </div>
  `,
  styles: [`
      $lt-gray: #ddd;
      $background-dark: #512DA8;
      $background-light: #9575CD;
      $background-pale: #D1C4E9;

      @mixin zero-margin($pad-up-down, $pad-left-right) {
          margin: 0px auto;
          padding: $pad-up-down $pad-left-right;
      }

      .jumbotron {
          @include zero-margin(70px,30px);
          background: $background-light ;
          color:floralwhite;
          min-height: 150px;
      }  
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
