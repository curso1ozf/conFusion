import { Injectable } from '@angular/core';
import { PromotionClass } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<PromotionClass []> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id): Promise<PromotionClass> {
    return Promise.resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]);
  }

  getPromotionFeatured(): Promise<PromotionClass> {
    return Promise.resolve(PROMOTIONS.filter((promotion) => (promotion.featured))[0]);
  }
}
