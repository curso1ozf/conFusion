import { Component, OnInit } from '@angular/core';
import { DishClass } from "../shared/dish";

import { Location } from "@angular/common";
import { ActivatedRoute, Params } from "@angular/router";

import { DishService } from "../services/dish.service";


@Component({
  selector: 'app-dishdetail',
  template: `
    <div [hidden]="dish">
      <mat-spinner></mat-spinner>
      <h4>Loading . . . Please wait</h4>
    </div>
    <div  class="container" fxLayout="row wrap" fxLayout.sm="column" fxLayout.xs="column" fxLayoutGap="10px" fxLayoutAlign.gt-md="space-around center">
      <div fxFlex *ngIf="dish">
        <mat-card>
          <mat-card-title> {{ dish.name | uppercase}} </mat-card-title>
          <img mat-card-image src="{{ dish.image }}" height="400px">
          <mat-card-content> {{ dish.description }} </mat-card-content>
          <mat-card-actions>
            <button mat-button (click)="goBack()">BACK</button>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
      <div fxFlex *ngIf="dish">
        <div>
          <h2>Comments</h2>
        </div>
        <div>
          <mat-list cols="1" rowHeight="40px">
            <mat-list-item *ngFor="let comment of dish.comments">
              <h4 matLine>{{comment.comment}}</h4>
              <p matLine class="demo-2"> {{comment.rating}} Stars </p>
              <p matLine class="demo-2"> -- {{comment.author}} {{comment.date | date}} </p>
            </mat-list-item>
          </mat-list>
        <div>
      </div>
    </div>
    
  `,
  styles: []
})
export class DishdetailComponent implements OnInit {
  
  dish: DishClass;
  constructor( 
    private dishservice: DishService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }
}
