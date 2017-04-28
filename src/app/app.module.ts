import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProfileComponent } from './profile/profile.component';
import { CvActions } from './store/actions';
import { LoadingComponent } from './loading/loading.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    ProfileComponent,
    LoadingComponent,
    ExperienceItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    CvActions,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
