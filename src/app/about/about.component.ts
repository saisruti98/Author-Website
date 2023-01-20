import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes
} from '@angular/animations';

import 'aos/dist/aos.css';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('author', [
      state('t',style({})),
      state('f',style({opacity: 0, transform: 'translateX(0)'})),
      transition('* => t', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('animation', [
      state('t',style({})),
      state('f',style({opacity: 0, transform: 'translateX(0)'})),
      transition('* => t', 

      animate('1000ms ease-in', 

      keyframes([
        style({ 
          transform: 'rotate3d(1, 0, 0, 90deg)',
          opacity: 0,
          offset: 0 
        }),
        style({ 
          transform: ' rotate3d(1, 0, 0, 20deg)',
          opacity: 1,
          offset: 0.4 
        }),
        style({ 
          transform: ' rotate3d(1, 0, 0, 10deg)', 
          offset: 0.6 
        }),
        style({ 
          transform: ' rotate3d(1, 0, 0, 5deg)', 
          offset: 0.8 
        }),
        style({ 
          transform: 'rotate3d(1, 0, 0, 0)', 
          offset: 1 
        })
      ])
    ),
    ),
      
    ])
  ]
})
export class AboutComponent implements OnInit {
  enable = "f";
  enable1 = "f";
  enable2 ="f";
  enable3 ="f";
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    var a = document.querySelector('#m1').getBoundingClientRect().y;
    var b = window.innerHeight;
    var c = document.querySelector('#m1').scrollHeight;
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

    var a = document.querySelector('#m2').getBoundingClientRect().y;
    var b = window.innerHeight;
    var c = document.querySelector('#m2').scrollHeight;
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

    var a = document.querySelector('#m3').getBoundingClientRect().y;
    var b = window.innerHeight;
    var c = document.querySelector('#m3').scrollHeight;
    if(a > b)
    {
      this.enable2 = "f"
    }
    if(a <= (b- 57))
    {
      this.enable2 = "t"
    }
    if(a +c -57< 0)
    {
      this.enable2 = "f"
    }

    var a = document.querySelector('#auth').getBoundingClientRect().y;
    var b = window.innerHeight;
    var c = document.querySelector('#auth').scrollHeight;
    if(a > b)
    {
      this.enable3 = "f"
    }
    if(a <= (b- 57))
    {
      this.enable3 = "t"
    }
    if(a +c -57< 0)
    {
      this.enable3 = "f"
    }
    
  }
  
}
