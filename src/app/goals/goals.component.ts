import { Component, OnInit } from '@angular/core';
import {Goals} from "../goals";
import {GoalService} from "../goal-service/goal.service";
import {AlertService} from "../alert-service/alert.service";
import {Quote} from "../quote-class/quote";
import {HttpClient} from "@angular/common/http";
import { QuoteRequestService } from '../quote-http/quote-request.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})

//defination
export class GoalsComponent implements OnInit {

  //fetching goal from service
  goals:Goals[];
  //alert service
  alertService:AlertService;
  //quote class
  quote:Quote;
  //constructor is initiated first when component is rendered
  //inorder for the services to be used inside this component we declare them as arguments in the constructor
  //adding the module http client because i want to consume the api inside this component.
  //constructor when consuming directly in component
  // constructor(goalService:GoalService, alertService:AlertService, private http: HttpClient) {
  //   this.goals = goalService.getGoals()
  //   this.alertService = alertService;
  //   this.quote = new Quote("","");
  // }

  //constructor when consuming api from service
  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService,private router:Router) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
    this.quote = new Quote("","");
  }
  //fetching specific detail of a goal
  goToUrl(id:any){
    this.router.navigate(['/goals',id])
  }

  //goals withing component
  //using the goals class to push an array of goals
  // goals:Goals[] = [
  //   //creating objects using properties declared in constructor
  //   new Goals(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2022,3,14)),
  //   new Goals(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2022,4,14)),
  //   new Goals(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,5,14)),
  //   new Goals(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2022,6,14)),
  //   new Goals(5,'Solve math homework','Damn Math',new Date(2022,7,14)),
  //   new Goals(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2022,8,14)),
  // ];

  //goal from form
  addNewGoal(goal:any){
    //checking goal length
    let goalLength = this.goals.length;
    //giving new goal an id
    goal.id = goalLength+1;
    //fetching complete date from form
    goal.completeDate = new Date(goal.completeDate)
    //pushing this goal to our array above
    this.goals.push(goal)
  }

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
        this.goals.splice(index,1);
        this.alertService.alertMe("The goal has been deleted");
      }
    }
  }


  //complex logic happen here
  ngOnInit(): void {
    //consuming api from service class

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote

  //   //consuming api directly from the component
  //   interface ApiResponse{
  //     author:string; //this are properties in JSON response
  //     quote:string;
  //   }
  //
  //   //using the subscribe to get quotes
  //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
  //     // Succesful API request
  //     this.quote = new Quote(data.author, data.quote)
  //   },err=>{
  //       this.quote = new Quote("Winston Churchill","Never never give up!")
  //       console.log("An error occurred")
  //     }
  //   )
   }

}
