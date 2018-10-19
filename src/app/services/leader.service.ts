import { Injectable } from '@angular/core';
import { LeaderClass } from '../shared/leader';
import { Observable } from '../../../node_modules/rxjs';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  leader: LeaderClass;
  
  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<LeaderClass []>{
    return this.restangular.all('leaders').getList();
  }

  getLeader(id): Observable<LeaderClass> {
    return this.restangular.one('leaders',id).get();    
  }

  getLeaderFeatured (): Observable<LeaderClass> {
    return this.restangular.all('leaders').getList({featured: true}).
    pipe(map(leaders => leaders[0]));
  }
}
