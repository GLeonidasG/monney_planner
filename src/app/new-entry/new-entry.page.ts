import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.page.html',
  styleUrls: ['./new-entry.page.scss'],
})
export class NewEntryPage implements OnInit {

  amount = 0;

  precision = 2;

  constructor() { }

  ngOnInit() {
  }

  amountChanged(event: number) {
    this.amount = event;
  }

}
