import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search = new EventEmitter<IDeal>();
  @Input() max = 100;
  @Input() min = 0;
  highValue = this.max / 2;
  deal = {} as IDeal;
  value = this.max / 4;
  options: Options = {
    floor: this.min,
    ceil: this.max,
    disabled: true
  };

  constructor() { }

  doSearch() {
    this.search.emit(this.deal);
  }
}
