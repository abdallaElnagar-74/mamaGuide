import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DocAuthComponent } from './components/doc-auth/doc-auth.component';

const routes: Routes = [
 {path:'',component:AuthComponent,children:[
  { path: '', redirectTo:'login',pathMatch:'full' },
  {path:'login',component:LoginComponent,title:'تسجيل الدخول'},
  {path:'register',component:RegisterComponent,title:'انشاء حساب ادمن'},
  {path:'register-doctor',component:DocAuthComponent,title:'انشاء حساب دكتور'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
