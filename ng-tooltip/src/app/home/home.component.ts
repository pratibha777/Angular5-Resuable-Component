import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import {TooltipComponent} from '../shared/tooltip/tooltip.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
  '(document:click)': 'handleOutsideClick($event)',
  '(document:keyup)': 'pressEscapeKey($event)' }
})
export class HomeComponent implements OnInit {
  displayTooltip1: boolean = false;
  displayTooltip2: boolean = false;;
  buttonName: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}
  
  onClick(event): void {
    this.hideTooltips();

    let buttonID: string;       
    buttonID = event.target.id;
    //console.log(buttonID);
    if (buttonID == 'button1')
      this.displayTooltip1=true;
    if (buttonID == 'button2')
      this.displayTooltip2=true;
  } 

  hideTooltips() {
    this.displayTooltip1 = false;
    this.displayTooltip2 = false;
  }
  
  handleOutsideClick(event) {
      let clickedComponent = event.target;
      let clickIsInside = false;
      do {
          if (clickedComponent === this.elementRef.nativeElement) {
            clickIsInside = true;
          }
          clickedComponent = clickedComponent.parentNode;
      } while (clickedComponent);
       
      if (!clickIsInside)
      this.hideTooltips();
      if(clickIsInside){
          console.log('inside');
      }else{
          console.log('outside');
      }
  }

  pressEscapeKey(event){
    if(event.which == 27){
      this.hideTooltips();
      console.log('Escape key is pressed!');
    }
  }
}    