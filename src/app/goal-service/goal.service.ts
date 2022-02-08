import { Injectable } from '@angular/core';
import { goals } from '../goalList';
import {Goals} from "../goals"; //the name in the braces is the property name

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return goals;
  }

  getGoal(id:any){
    let goalSelected;
    for (let goal of goals){
      if (goal.id == id){
        goalSelected = goal;
      }
    }
    return goalSelected;
  }

  constructor() { }
}
