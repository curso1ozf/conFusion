import { Injectable } from '@angular/core';
import { LeaderClass } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  leader: LeaderClass;
  
  constructor() { }

  getLeaders(): Promise<LeaderClass []>{
    return Promise.resolve(LEADERS);
  }

  getLeader(id): Promise<LeaderClass> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.id===id))[0]);
  }

  getLeaderFeatured (): Promise<LeaderClass> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.featured))[0]);
  }
}
