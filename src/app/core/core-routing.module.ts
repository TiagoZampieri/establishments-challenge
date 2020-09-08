import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { EstablishmentSettingsComponent } from './establishment/establishment-settings/establishment-settings.component';
import { ListComponent } from './establishment/list/list.component';

const routes: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
