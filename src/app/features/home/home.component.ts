import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FavoriteComponent } from './../../components/favorite/favorite.component';
import { DealService } from './../../core/deals/deal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  deals: IDealWithPrices;
  max: number;
  min: number;
  selected;
  favorites: IDeal[] = [];
  constructor(private service: DealService, protected dialogService: NbDialogService) { }

  ngOnInit() {
    this.service.allDeals$.subscribe(deals => this.deals = deals);
  }

  doSearch(e: IDeal) {
    this.service.searchDeals(e.name).subscribe(deals => this.deals = deals);
  }

  sortBy(e) {
    this.service.sortBy(e).subscribe(deals => this.deals = deals);
  }

  addOrRemoveFavorite(deal) {
    if (!this.favorites.includes(deal)) {
      this.favorites.push(deal);
    } else {
      const index: number = this.favorites.indexOf(deal);
      this.favorites.splice(index, 1);
    }
  }

  openFavModal() {
    this.dialogService.open(FavoriteComponent, {
      context: {
        favorites: this.favorites,
      },
    });
  }
}
