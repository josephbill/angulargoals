import { Component, OnInit } from '@angular/core';
import {Goals} from "../goals";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  //using the goals class to push an array of goals
  goals:Goals[] = [


    //creating objects using properties declared in constructor
    new Goals(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2022,3,14)),
    new Goals(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2022,4,14)),
    new Goals(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,5,14)),
    new Goals(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2022,6,14)),
    new Goals(5,'Solve math homework','Damn Math',new Date(2022,7,14)),
    new Goals(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2022,8,14)),
  ]
  //this function is run when button is clicked
  toggleDetails(index: any){
    //changing show boolean property to true
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  //this function is executed when an event is emitted from the child component i.e. Goal Details
  deleteGoal(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      //this will take the goals array and remove the array item selected and change the array via the splice method ,
      // ?teaser whats the difference between splice and slice
      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  //constructor is initiated first when component is rendered
  constructor() { }

  ngOnInit(): void {
  }

}
