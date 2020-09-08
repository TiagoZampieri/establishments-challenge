import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ListComponent } from './establishment/list/list.component';
import { EstablishmentSettingsComponent } from './establishment/establishment-settings/establishment-settings.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CoreComponent,
    ListComponent,
    EstablishmentSettingsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
  ]
})
export class CoreModule { }
