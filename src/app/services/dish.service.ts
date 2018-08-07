import { Injectable } from '@angular/core';
import { DishClass } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { resolve } from 'url';

import { Observable, of, observable } from 'rxjs';
import { delay } from 'rxjs/operators';

 

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<DishClass[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<DishClass> {
    return of(DISHES.filter((dish) => (dish.id===id))[0]).pipe(delay(2000));
  }

  getDishFeatured(): Observable<DishClass> {
    return of(DISHES.filter((dish) => (dish.featured))[0]).pipe(delay(2000)); 
  }

  getDishIds(): Observable<number[] | any>{
    return of(DISHES.map(dish => dish.id));
  }
}
