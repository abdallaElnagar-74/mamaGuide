import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AllArticComponent } from './components/all-artic/all-artic.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    {path:'',redirectTo:'profile',pathMatch:'full'},
    {path:'profile',component:ProfileComponent,title:'الصفحة الشخصيه'},
    {path:'all-artic',component:AllArticComponent,title:'جميع المقالات'}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
