import { Component, OnInit } from '@angular/core';

const DISH = {
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  label: 'Hot',
  price: '4.99',
  // tslint:disable-next-line:max-line-length
  description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  comments: [
       {
           rating: 5,
           comment: 'Imagine all the eatables, living in conFusion!',
           author: 'John Lemon',
           date: '2012-10-16T17:57:28.556094Z'
       },
       {
           rating: 4,
           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
           author: 'Paul McVites',
           date: '2014-09-05T17:57:28.556094Z'
       },
       {
           rating: 3,
           comment: 'Eat it, just eat it!',
           author: 'Michael Jaikishan',
           date: '2015-02-13T17:57:28.556094Z'
       },
       {
           rating: 4,
           comment: 'Ultimate, Reaching for the stars!',
           author: 'Ringo Starry',
           date: '2013-12-02T17:57:28.556094Z'
       },
       {
           rating: 2,
           comment: 'It\'s your birthday, we\'re gonna party!',
           author: '25 Cent',
           date: '2011-12-02T17:57:28.556094Z'
       }
   ]
};

@Component({
  selector: 'app-dishdetail',
  template: `
    <div class="container" fxLayout="row" fxLayout.sm="column" fxLayout.xs="column" fxLayoutGap="10px" fxLayoutAlign.gt-md="space-around center">
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

  constructor() { }

  ngOnInit() {
  }

  dish = DISH;
}
