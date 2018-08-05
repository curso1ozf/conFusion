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
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(LEADERS),2000);
    });
  }

  getLeader(id): Promise<LeaderClass> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id===id))[0]),2000);
    });
  }

  getLeaderFeatured (): Promise<LeaderClass> {
    return new Promise(resolve => {
      //Mock server latency, 2 seconds delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.featured))[0]),2000);
    });
  }
}
