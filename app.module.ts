import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { MentorhomepageComponent } from './mentorhomepage/mentorhomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserhomepageComponent,
    AdminhomepageComponent,
    MentorhomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'userhomepage',component:UserhomepageComponent},
      {path:'adminhomepage',component:AdminhomepageComponent},
      {path:'mentorhomepage',component:MentorhomepageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
