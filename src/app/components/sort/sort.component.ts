import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent {

  @Output() search = new EventEmitter<IDeal>();

  constructor() { }

  doSearch(e) {
    this.search.emit(e);
  }
}
