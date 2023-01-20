import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const textWrapper = document.querySelector('.h');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  const textWrapper1 = document.querySelector('.j');
  textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: true})
  .add({
    targets: '.h .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 120*i
  })
  .add({
    targets: '.j .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })
  .add({
    targets: '.j',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  .add({
    targets: '.h',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
   
  });
  

  }

  
}
