import { Component, OnInit } from '@angular/core';

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
      <img mat-card-image src={{dish.image}} alt={{dish.name}}>
      <mat-card-content>
      <p>{{dish.description}}
      </p>
      </mat-card-content>
      </mat-card>

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
      private leaderservice: LeaderService
  ){ }

  ngOnInit() {
    this.dish = this.dishService.getDishFeatured();
    this.promotion = this.promotionService.getPromotionFeatured();
    this.leader = this.leaderservice.getLeaderFeatured();
  }

}
