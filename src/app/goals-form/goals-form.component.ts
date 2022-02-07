import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Goals} from '../goals'

@Component({
  selector: 'app-goals-form',
  templateUrl: './goals-form.component.html',
  styleUrls: ['./goals-form.component.css']
})
export class GoalsFormComponent implements OnInit {

  //new property to map creation of object according to goal class
  //this property will be changed by the forms input via the concept of two way binding using NgModel directive
  //check this in goals form html template
  newGoal = new Goals(1,"","",new Date());
  //using output binding to pass data from child component to parent component i.e Goals component
  @Output() addGoal = new EventEmitter<Goals>();
  //function runs when the add goal button is clicked / the parent component should now process this function i.e. add goal to our array
  //the emit property passes our new goal object i.e. this.newGoal
  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
