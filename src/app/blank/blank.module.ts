import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { SharedModule } from '../shared/shared.module';

import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    SharedModule,
  ]
})
export class BlankModule { }
