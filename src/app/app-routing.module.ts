import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guard/admin.guard';
import { doctorGuard } from './core/guard/doctor.guard';

const routes: Routes = [
  {path:'',redirectTo:'blank',pathMatch:'full'},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'blank', loadChildren: () => import('./blank/blank.module').then(m => m.BlankModule) },
  {path:'admin',canActivate:[adminGuard],loadChildren:()=> import ('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'doctor',canActivate:[doctorGuard],loadChildren:()=> import ('./user/user.module').then((m=>m.UserModule))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
