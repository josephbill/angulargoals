import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalsFormComponent } from './goals-form/goals-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgProgressModule} from "@ngx-progressbar/core";
import {NgProgressHttpClientModule} from "@ngx-progressbar/http-client";
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalsFormComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),  //for loader i.e. progress bar
    NgProgressHttpClientModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
