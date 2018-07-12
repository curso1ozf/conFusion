import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] =[
  {
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  },
  {
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
  },
  {
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
  },
  {
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
  }
];

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
        <mat-grid-tile *ngFor="let dish of dishes">
          <img height="200px" src={{dish.image}} alt={{dish.name}}>
          <mat-grid-tile-footer>
            <h1 matLine>{{dish.name | uppercase}}</h1>
          </mat-grid-tile-footer>
        </mat-grid-tile>
      </mat-grid-list>
    </div>

    <app-dishdetail></app-dishdetail>
  `,
  styles: []
})



export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dishes: Dish[] = DISHES;

  selectedDish = DISHES[0];

}
