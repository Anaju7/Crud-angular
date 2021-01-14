import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from "./pipe/replace.pipe";
import { NavBarComponents } from "./nav-bar/nav-bar.components";
import { Error404Compoennt } from './erro-404/erro-404.component';
import { CourseInfoComponent } from './course/course-info.compoment';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponents,
    Error404Compoennt,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Compoennt
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
