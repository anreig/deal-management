import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {

  @Input() deal: IDeal;
  @Output() favorite = new EventEmitter<IDeal[]>();
  constructor(private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  addOrRemoveFavorite(deal) {
    this.favorite.emit(deal);
    this.showToast();
  }

  showToast() {
    this.toastrService.show('success',
      'Succesfully added to favorites');
  }
}
