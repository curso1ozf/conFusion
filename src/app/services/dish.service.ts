import { Injectable } from '@angular/core';
import { DishClass } from '../shared/dish';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

 

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<DishClass[]> {
    return this.http.get<DishClass[]>(baseURL + 'dishes');
  }

  getDish(id: number): Observable<DishClass> {
    return this.http.get<DishClass>(baseURL + 'dishes/' + id);
  }

  getDishFeatured(): Observable<DishClass> {
    return this.http.get<DishClass[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));    
  }

  getDishIds(): Observable<number[] | any>{
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}
