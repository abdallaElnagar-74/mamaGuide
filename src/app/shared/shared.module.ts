import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HomeComponent } from './components/nav/home/home.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from '../core/pipes/search.pipe';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedNavComponent } from './components/shared-nav/shared-nav.component';

@NgModule({
  declarations: [
    SharedComponent,
    NavComponent,
    HomeComponent,
    ViewDoctorsComponent,
    SearchPipe,
    HospitalsComponent,
    SharedNavComponent
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    AnimateOnScrollModule,
    NgxPaginationModule,
    FormsModule,
    CarouselModule,
    
  ],
  exports:[
    SharedNavComponent,
    NavComponent,
    ReactiveFormsModule,
    HomeComponent,
    AnimateOnScrollModule,
    CarouselModule,
  ]
})
export class SharedModule { }
