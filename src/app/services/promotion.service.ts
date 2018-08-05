import { Injectable } from '@angular/core';
import { PromotionClass } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<PromotionClass []> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(PROMOTIONS),2000);
    });
  }

  getPromotion(id): Promise<PromotionClass> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]),2000);
    });
  }

  getPromotionFeatured(): Promise<PromotionClass> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.featured))[0]),2000);
    });
  }
}
