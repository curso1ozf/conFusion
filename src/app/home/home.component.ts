import { Component, OnInit, Inject } from '@angular/core';

import { DishClass } from '../shared/dish';
import { PromotionClass } from '../shared/promotion';
import { LeaderClass } from '../shared/leader';

import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service'; 
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container"
    fxLayout="row"
    fxLayout.sm="column"
    fxLayout.xs="column"
    fxLayoutAlign.gt-md="space-around center"
    fxLayoutGap="10px">

      <mat-card *ngIf="dish" fxFlex>
      <mat-card-header>
      <div mat-card-avatar></div>
      <mat-card-title>
        <h3>{{dish.name | uppercase}}</h3>
      </mat-card-title>
      </mat-card-header>
      <img mat-card-image src="{{ BaseURL + dish.image }}" alt={{dish.name}}>
      <mat-card-content>
      <p>{{dish.description}}
      </p>
      </mat-card-content>
      </mat-card>
      <div [hidden]="dish">
        <mat-spinner></mat-spinner>
        <h4>Loading . . . Please wait</h4>
      </div>

      <mat-card *ngIf="promotion" fxFlex>
      <mat-card-header>
      <div mat-card-avatar></div>
      <mat-card-title>
        <h3>{{promotion.name | uppercase}}</h3>
      </mat-card-title>
      </mat-card-header>
      <img mat-card-image src={{promotion.image}} alt={{promotion.name}}>
      <mat-card-content>
      <p>{{promotion.description}}
      </p>
      </mat-card-content>
      </mat-card>
      <div [hidden]="promotion">
        <mat-spinner></mat-spinner>
        <h4>Loading . . . Please wait</h4>
      </div>

      <mat-card *ngIf="leader" fxFlex>
      <mat-card-header>
      <div mat-card-avatar></div>
      <mat-card-title>
        <h3>{{leader.name | uppercase}}</h3>
      </mat-card-title>
      </mat-card-header>
      <img mat-card-image src={{leader.image}} alt={{promotion.name}}>
      <mat-card-content>
      <p>{{leader.description}}
      </p>
      </mat-card-content>
      </mat-card>
      <div [hidden]="leader">
        <mat-spinner></mat-spinner>
        <h4>Loading . . . Please wait</h4>
      </div>

    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  dish: DishClass;
  promotion: PromotionClass;
  leader: LeaderClass

  constructor(
      private dishService: DishService, 
      private promotionService: PromotionService, 
      private leaderservice: LeaderService,
      @Inject('BaseURL') private BaseURL
  ){ }

  ngOnInit() {
    this.dishService.getDishFeatured().subscribe(dish => this.dish = dish);
    this.promotionService.getPromotionFeatured().subscribe(promotion => this.promotion = promotion);
    this.leaderservice.getLeaderFeatured().subscribe(leader => this.leader = leader);
  }

}
