import { Component, OnInit, Inject } from '@angular/core';
import { DishClass } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { flyInOut, expand } from '../animations/app.animations';

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
    
    <div fxFlex *ngIf="dishes" [@expand]>
      <mat-grid-list cols="2" rowHeight="200px">
        <mat-grid-tile *ngFor="let dish of dishes" [routerLink]="['/dishdetail',dish.id]" appHighlight>
          <img height="200px" src="{{BaseURL + dish.image}}" alt={{dish.name}}>
          <mat-grid-tile-footer>
            <h1 matLine>{{dish.name | uppercase}}</h1>
          </mat-grid-tile-footer>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
    <div [hidden]="dishes || errMess">
      <mat-spinner></mat-spinner>
      <h4>Loading . . . Please wait</h4>
    </div>
    <div *ngIf="errMess">
      <h2>Error</h2>
      <h4>{{errMess}}</h4>
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



export class MenuComponent implements OnInit {

  dishes: DishClass[];
  errMess: string;

  constructor( private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess.message);
  }


  

}
