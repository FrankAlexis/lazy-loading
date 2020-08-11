import { CrearComponent } from './crear/crear.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NietoDetailComponent } from './nieto-detail.component';
import { SeleccionComponent } from './seleccion/seleccion/seleccion.component';

const routes: Routes = [{
  path: '',
  component: NietoDetailComponent,
  children: [
    {
      path: "seleccion",
      component: SeleccionComponent
    },
    {
      path: "crear",
      component: CrearComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NietoDetailRoutingModule { }
