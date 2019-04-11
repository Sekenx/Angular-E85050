import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

RouterModule.forRoot([
   {
      path: '',
      component: HomeComponent
   },
   {
     path: 'app-home',
     component: HomeComponent
   }
])

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, TeamComponent, HomeComponent, NavbarComponent, LayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
