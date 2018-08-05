import { Injectable } from '@angular/core';
import { DishClass } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<DishClass[]> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(DISHES),2000);
    });
  }

  getDish(id: number): Promise<DishClass> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id===id))[0]),2000);
    });
  }

  getDishFeatured(): Promise<DishClass> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]),2000);
    });   
  }
}
