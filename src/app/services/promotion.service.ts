import { Injectable } from '@angular/core';
import { PromotionClass } from '../shared/promotion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<PromotionClass []> {
    return this.restangular.all('promotions').getList();    
  }

  getPromotion(id): Observable<PromotionClass> {
    return  this.restangular.one('promotions',id).get();
  }

  getPromotionFeatured(): Observable<PromotionClass> {
    return this.restangular.all('promotions').getList({featured: true}).
    pipe(map(promotions => promotions[0]));  

  }
}
