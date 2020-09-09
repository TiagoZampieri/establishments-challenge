import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'establishment',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'establishment'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
