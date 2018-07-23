import { Injectable } from '@angular/core';
import { LeaderClass } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  leader: LeaderClass;
  
  constructor() { }

  getLeaders(): LeaderClass []{
    return LEADERS;
  }

  getLeader(id): LeaderClass {
    return LEADERS.filter((leader) => (leader.id===id))[0];
  }

  getLeaderFeatured (): LeaderClass {
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}
