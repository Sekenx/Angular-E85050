import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SharedComponent } from './shared/shared.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

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
  declarations: [ AppComponent, HelloComponent, TeamComponent, HomeComponent, HeaderComponent, FooterComponent, SharedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
