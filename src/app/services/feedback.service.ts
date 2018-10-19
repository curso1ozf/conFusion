import { Injectable } from '@angular/core';

import { feedBackClass } from '../shared/feedback';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular) { }
  
  submitFeedback(feedback): Observable<feedBackClass>{
    return this.restangular.all('feedback').post(feedback);
  }

}
