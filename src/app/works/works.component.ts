import { Component, OnInit,Input } from '@angular/core';
import { images } from '../images';
import { story } from '../books';
import { poem } from '../books';
import { ImageFilterPipe } from '../filter.pipe';
import { Observable, BehaviorSubject, combineLatest, of, iif, OperatorFunction } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('story', [
      state('t',style({})),
      state('f',style({opacity: 0, transform: 'translateX(0)'})),
      transition('* => t', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('poems', [
      state('t',style({})),
      state('f',style({opacity: 0, transform: 'translateX(0)'})),
      transition('* => t', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ]
})
export class WorksComponent implements OnInit {
  @Input() filterBy?: string = 'all';

 image = images;
 story = story;
 poem = poem;
 enable = "f";
 enable1 = "f";
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  

  onWindowScroll() {
    var a = document.querySelector('#story').getBoundingClientRect().y;
    var b = window.innerHeight;
    var c = document.querySelector('#story').scrollHeight;
    if(a > b)
    {
      this.enable = "f"
    }
    if(a <= (b- 57))
    {
      this.enable = "t"
    }
    if(a +c -57< 0)
    {
      this.enable = "f"
    }
    var a = document.querySelector('#poem').getBoundingClientRect().y;
    var b = window.innerHeight;
    var c = document.querySelector('#poem').scrollHeight;
    if(a > b)
    {
      this.enable1 = "f"
    }
    if(a <= (b- 57))
    {
      this.enable1 = "t"
    }
    if(a +c -57< 0)
    {
      this.enable1 = "f"
    }

  }
}

