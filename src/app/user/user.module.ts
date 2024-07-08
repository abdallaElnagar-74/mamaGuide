import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../app/shared/shared.module';
import { SharedNavComponent } from '../shared/components/shared-nav/shared-nav.component';
import { DocProfileComponent } from './components/doc-profile/doc-profile.component';
import { MakeArticleComponent } from './components/make-article/make-article.component';


@NgModule({
  declarations: [
    UserComponent,
    DocProfileComponent,
    MakeArticleComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
