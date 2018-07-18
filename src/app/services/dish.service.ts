import { Injectable } from '@angular/core';
import { DishClass } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): DishClass[] {
    return DISHES;
  }

  getDish(id: number): DishClass {
    return DISHES.filter((dish) => (dish.id===id))[0];
  }

  getDishFeatured(): DishClass {
    return DISHES.filter((dish) => (dish.featured))[0];    
  }
}
