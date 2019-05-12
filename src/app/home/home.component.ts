import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('expand',   style({
        transform: "translateY(150%)",
        height: "210px",
        width: "210px"
      })),
      state('minimize', style({
         transform: "translateY(0%)",
        height: "50px",
        width: "*"
      })),
      transition('expand <=> minimize', animate('3000ms')),
    ]),
  ]
})

export class HomeComponent{
  state = 'expand'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition <= componentPosition) {
        this.state = 'minimize'
         
      } else {
        this.state = 'expand'
      }

    }
}
