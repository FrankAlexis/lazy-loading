import { NietoDetailModule } from './../nieto-detail/nieto-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    NietoDetailModule
  ]
})
export class DetailModule { }
