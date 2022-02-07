import { Injectable } from '@angular/core';
import { goals } from '../goalList'; //the name in the braces is the property name

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals;
  }

  constructor() { }
}
