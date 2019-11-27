import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbButtonModule,
    NbDialogModule.forChild()
  ],

})
export class HomeModule { }
