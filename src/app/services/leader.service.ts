import { Injectable } from '@angular/core';
import { LeaderClass } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from '../../../node_modules/rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  leader: LeaderClass;
  
  constructor() { }

  getLeaders(): Observable<LeaderClass []>{
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id): Observable<LeaderClass> {
    return of(LEADERS.filter((leader) => (leader.id===id))[0]).pipe(delay(2000));
  }

  getLeaderFeatured (): Observable<LeaderClass> {
    return of(LEADERS.filter((leader) => (leader.featured))[0]).pipe(delay(2000));
  }
}
