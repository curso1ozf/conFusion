import { Injectable } from '@angular/core';
import { DishClass } from '../shared/dish';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Restangular } from 'ngx-restangular';
 

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private restangular: Restangular) { }

  getDishes(): Observable<DishClass[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<DishClass> {
    return this.restangular.one('dishes', id).get();
  }

  getDishFeatured(): Observable<DishClass> {
    return this.restangular.all('dishes').getList({featured: true}).
    pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any>{
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }
}
