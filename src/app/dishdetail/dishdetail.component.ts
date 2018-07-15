import { Component, OnInit, Input } from '@angular/core';
import { DishClass } from "../shared/dish";


@Component({
  selector: 'app-dishdetail',
  template: `
    <div *ngIf="dish" class="container" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutGap="10px" fxLayoutAlign.gt-md="space-around center">
      <div fxFlex>
        <mat-card>
          <mat-card-title> {{ dish.name }} </mat-card-title>
          <img mat-card-image src="{{ dish.image }}" height="400px">
          <mat-card-content> {{ dish.description }} </mat-card-content>
          <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
      <div fxFlex>
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
  @Input()
  dish: DishClass;
  constructor() { }

  ngOnInit() {
  }

}
