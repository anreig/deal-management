import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input() favorites;
  constructor(protected dialogRef: NbDialogRef) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
