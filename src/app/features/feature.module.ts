import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    NbButtonModule
  ]
})
export class FeatureModule { }
