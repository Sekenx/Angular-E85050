import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes:Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TeamComponent, HomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
