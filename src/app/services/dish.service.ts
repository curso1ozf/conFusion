import { Injectable } from '@angular/core';
import { DishClass } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<DishClass[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: number): Promise<DishClass> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id===id))[0]);
  }

  getDishFeatured(): Promise<DishClass> {
    return Promise.resolve(DISHES.filter((dish) => (dish.featured))[0]);    
  }
}
