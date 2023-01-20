import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Annapurna Sharma';
  currentSection = 'section1';
  navbar = '';
  isCollapsed = false;
  isbutton = false;

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior:"smooth"});
    this.currentSection = section;
    if (this.currentSection == "section2"|| this.currentSection == "section3") {

      this.navbar = "black"

    } else {
       this.navbar=""

    }
    if(this.isbutton == true)
    {
      this.isCollapsed = true;
      this.isbutton = false;
    }
  }
  
  collapse() {
    this.isbutton = true;
    this.isCollapsed = !this.isCollapsed
  }

  @HostListener('window:scroll')
  

onWindowScroll() {
   
    
    if(document.querySelector("#section2").getBoundingClientRect().y <= 56)
    {
      this.currentSection = "section2";
    }
    if(document.querySelector("#section3").getBoundingClientRect().y <= 56)
    {
      this.currentSection = "section3";
    }
    if(document.querySelector("#section2").getBoundingClientRect().y > 56)
    {
      this.currentSection = "section1";
    }
    if (this.currentSection == "section2"|| this.currentSection == "section3") {

      this.navbar = "black"

    } else {
       this.navbar=""

    }
}

}

