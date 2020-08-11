import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NietoDetailRoutingModule } from './nieto-detail-routing.module';
import { NietoDetailComponent } from './nieto-detail.component';
import { SeleccionComponent } from './seleccion/seleccion/seleccion.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [NietoDetailComponent, SeleccionComponent, CrearComponent],
  imports: [
    CommonModule,
    NietoDetailRoutingModule
  ]
})
export class NietoDetailModule { }
