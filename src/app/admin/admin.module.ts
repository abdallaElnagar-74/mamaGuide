import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';

import { SharedNavComponent } from '../shared/components/shared-nav/shared-nav.component';
import { AllArticComponent } from './components/all-artic/all-artic.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AdminComponent,
    AllArticComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
