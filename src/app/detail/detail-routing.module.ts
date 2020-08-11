import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '', component: DetailComponent,
    children: [
      { path: 'nieto-detail', loadChildren: () => import('../nieto-detail/nieto-detail.module').then(m => m.NietoDetailModule) },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
