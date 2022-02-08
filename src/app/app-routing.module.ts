import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoalsComponent} from "./goals/goals.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {GoalDetailsComponent} from "./goal-details/goal-details.component";

const routes: Routes = [
  { path: 'goals', component: GoalsComponent },
  { path: 'about', component: AboutComponent },
  { path:'**', component:NotFoundComponent}, //this route will be a redirect for a user accessing a component that does not exist
  { path: '', redirectTo:"/goals", pathMatch:"full"}, //redirect for accessing a route not declared
  { path: 'goals/:id', component: GoalDetailsComponent }, //this route goes to a specific goal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
