import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildSecondComponent } from './child-second/child-second.component';
const routes: Routes=[
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'childFirst', component: ChildFirstComponent,
      },
      {
        path: 'childSecond', component: ChildSecondComponent,
      },
    ]
  },
  {
    path: 'About', component: AboutComponent
  },
  {
    path: 'Contact', component: ContactComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ChildFirstComponent,
    ChildSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
