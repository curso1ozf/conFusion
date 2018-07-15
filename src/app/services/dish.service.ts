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
}
