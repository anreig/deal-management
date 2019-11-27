import { CommonModule } from '@angular/common';
import { DealService } from './deals/deal.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CommonModule
  ],
  providers: [
    DealService
  ]
})
export class CoreModule { }
