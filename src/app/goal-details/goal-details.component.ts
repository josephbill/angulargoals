import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Goals} from "../goals";

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  //input binding
  @Input() goal: Goals;
  //event emitter i.e. signal this event to the parent component i.e. GoalsComponent , so on receiving this event it has
  //to go ahead and process it ,the event here is the isComplete emitter
  @Output()  isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() {
     this.goal = new Goals(1,"","",new Date());
  }

  ngOnInit(): void {
  }

}
