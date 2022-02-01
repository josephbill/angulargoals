import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  //the [] denotes this as an attribute directive.
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  // constructor(private elem:ElementRef){
  //   //here we are targetting the element which will be given our directive and applying this style to it
  //   this.elem.nativeElement.style.textDecoration='line-through';
  // }

  //our user initiated actions
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }


  constructor(private elem:ElementRef){ }
   //this function captures the action done by the user and then executes code block based on that action
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
