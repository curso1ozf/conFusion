import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="container footer" 
  fxLayout="row wrap" 
  fxLayout.lt-md="column" 
  fxLayoutAlign="center center" 
  fxLayoutGap="10px">

    <div fxFlex="100" fxFlex.gt-sm="50">
      <div fxLayout="row">
        <div fxFlex="40" fxFlexOffset="20px">
          <h4>Links</h4>
          <mat-list>
            <mat-list-item><a mat-button>Home</a></mat-list-item>
            <mat-list-item><a mat-button>About</a></mat-list-item>
            <mat-list-item><a mat-button>Menu</a></mat-list-item>
            <mat-list-item><a mat-button>Contact</a></mat-list-item>
          </mat-list>
        </div>
        <div fxFlex="55">
          <h4>Our Address</h4>
          <address style="text-size: 80%">
            121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>
            <i class="fa fa-phone"></i>: +852 1234 5678<br>
            <i class="fa fa-fax"></i>: +852 8765 4321<br>
            <i class="fa fa-envelope"></i>:
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
      </div>
    </div>
    <div fxFlex="100" fxFlex.gt-sm="45">
      <div style="text-align:center">
        <a mat-icon-button class="btn-google-plus2" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
        <a mat-icon-button class="btn-facebook2" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
        <a mat-icon-button class="btn-linkedin2" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
        <a mat-icon-button class="btn-twitter2" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
        <a mat-icon-button class="btn-youtube2" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
        <a mat-icon-button class="btn-mail" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
        
      </div>
    </div>
    <div>
        <p>© Copyright 2018 Ristorante Con Fusion</p>
    </div>
  </div>
  `,
  styles: [`$lt-gray: #ddd;
  $background-dark: #512DA8;
  $background-light: #9575CD;
  $background-pale: #D1C4E9;
  
  @mixin zero-margin($pad-up-down, $pad-left-right) {
      margin: 0px auto;
      padding: $pad-up-down $pad-left-right;
  }
  
  .footer{
      background-color: $background-pale;
      @include zero-margin(20px, 0px);
  }
  
  .btn-facebook2 {color:#fff!important; background-color:#3b5998!important;}
  .btn-google-plus2{color:#fff!important;background-color:#dd4b39!important;}
  .btn-youtube2{color:#fff!important;background-color:#ff4b39!important;}
  .btn-linkedin2{color:#fff!important;background-color:#007bb6!important;}
  .btn-twitter2{color:#fff!important;background-color:#55acee!important;}
  .btn-mail{color:#fff!important;background-color:#512DA8!important;}
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
