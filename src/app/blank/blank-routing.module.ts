import { HomeComponent } from './../shared/components/nav/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank.component';
import { ViewDoctorsComponent } from '../shared/components/view-doctors/view-doctors.component';
import { HospitalsComponent } from '../shared/components/hospitals/hospitals.component';

const routes: Routes = [{ path: '', component: BlankComponent,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'doctors',component:ViewDoctorsComponent,title:'Doctors'},
  {path:'hospital',component:HospitalsComponent,title:'Hospitals'},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule { }
