import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from '../shared/components/nav/home/home.component';
import { DocProfileComponent } from './components/doc-profile/doc-profile.component';
import { MakeArticleComponent } from './components/make-article/make-article.component';

const routes: Routes = [
  { path: '', component: UserComponent,children:[
    {path:'',redirectTo:'profile',pathMatch:'full'},
    {path:'profile',component:DocProfileComponent,title:'حساب الطبيب'},
    {path:'make-article',component:MakeArticleComponent,title:'انشاء مقال'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
