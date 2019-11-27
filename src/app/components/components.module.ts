import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { Ng5SliderModule } from 'ng5-slider';
import { DealCardComponent } from './deal-card/deal-card.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [DealCardComponent, SearchComponent, SortComponent, FavoriteComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng5SliderModule,
    NbRadioModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    NbSelectModule,
    NbDialogModule.forChild(),
    NbListModule,
    NbToastrModule.forRoot(),
  ],
  exports: [
    DealCardComponent,
    SearchComponent,
    SortComponent,
    FavoriteComponent
  ],
  entryComponents: [FavoriteComponent]
})
export class ComponentsModule { }
