import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { LoremIpsumComponent } from './lorem-ipsum.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ImageFilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScrollSpyDirective,
    LoremIpsumComponent,
    HomeComponent,
    WorksComponent,
    ImageFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
