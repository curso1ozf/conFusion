import { Component, OnInit } from '@angular/core';
import { DishClass } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  template: `
    <div class="container" fxLayout="column" fxLayoutGap="10px">
      <div fxFlex>
        <div>
          <h3>Menu</h3>
          <hr>
        </div>
      </div>  
    
    <div fxFlex>
      <mat-grid-list cols="2" rowHeight="200px">
        <mat-grid-tile *ngFor="let dish of dishes" (click)="onSelected(dish)">
          <img height="200px" src={{dish.image}} alt={{dish.name}}>
          <mat-grid-tile-footer>
            <h1 matLine>{{dish.name | uppercase}}</h1>
          </mat-grid-tile-footer>
        </mat-grid-tile>
      </mat-grid-list>
    </div>

    <app-dishdetail [dish]="selectedDish"></app-dishdetail>
  `,
  styles: []
})



export class MenuComponent implements OnInit {

  dishes: DishClass[];
  selectedDish: DishClass;

  constructor( private dishService: DishService) { }

  ngOnInit() {
    this.dishes= this.dishService.getDishes();
  }

  onSelected(dish: DishClass){
    this.selectedDish=dish;
  }

  

}