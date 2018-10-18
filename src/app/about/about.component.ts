import { Component, OnInit } from '@angular/core';

import { LeaderClass } from '../shared/leader';

import { LeaderService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  template: `
  <div class="container"
  fxLayout="column"
  fxLayoutGap="10px">

    <div fxFlex>
      <div>
          <h3>About Us</h3>
          <hr>
      </div>
    </div>

    <div fxFlex>
      <div fxLayout="column" fxLayout.gt-sm="row">
        <div fxFlex="70">
          <h2>Our History</h2>
          <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
          <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
        </div>
        <div fxFlex="30">
          <mat-card>
            <mat-card-header>
              <mat-card-title>
              <h2>Facts At a Glance</h2>
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <dl>
                <dt>Started</dt>
                <dd>3 Feb. 2013</dd>
                <dt>Major Stake Holder</dt>
                <dd>HK Fine Foods Inc.</dd>
                <dt>Last Year's Turnover</dt>
                <dd>$1,250,375</dd>
                <dt>Employees</dt>
                <dd>40</dd>
              </dl>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
    
    <div fxFlex>
      <mat-card>
        <blockquote>
          <h3>You better cut the pizza in four pieces because
              I'm not hungry enough to eat six.</h3>
          <footer>-- Yogi Berra,
            <cite>The Wit and Wisdom of Yogi Berra,
              P. Pepe, Diversion Books, 2014</cite>
          </footer>
        </blockquote>
      </mat-card>
    </div>


    <div fxFlex *ngIf="leaders" [@expand]>
      <h2>Corporate Leadership</h2>
      <mat-list>
        <mat-list-item *ngFor="let leader of leaders">
          <img matListAvatar src={{leader.image}} alt={{leader.name}}>
          <h3 matLine> {{leader.name}} </h3>
          <p matLine>
            <span> {{leader.designation}} </span>
          </p>
          <p matLine>
            <span> {{leader.description}} </span>
          </p>
        </mat-list-item>
      </mat-list>
    </div>
    <div [hidden]="leaders">
      <mat-spinner></mat-spinner>
      <h4>Loading . . . Please wait</h4>
    </div>
  </div>
  `,
  styles: [],
  host: {
    '[@flyInOut]': 'true',
    'style':'display:block'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: LeaderClass [];
  leaderErrMess: string;
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leaderservice.getLeaders()
    .subscribe(leaders => this.leaders = leaders,
      errmess => this.leaderErrMess = <any>errmess.message);
  }

}
