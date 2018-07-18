import { Injectable } from '@angular/core';
import { PromotionClass } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): PromotionClass [] {
    return PROMOTIONS;
  }

  getPromotion(id): PromotionClass {
    return PROMOTIONS.filter((promotion) => (promotion.id === id))[0];
  }

  getPromotionFeatured(): PromotionClass {
    return PROMOTIONS.filter((promotion) => (promotion.featured))[0];
  }
}
