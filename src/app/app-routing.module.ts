import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
  {
    path: '**',
    redirectTo: 'detail'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
