import { Component, EventEmitter, OnInit } from '@angular/core';
import { EntryModel } from '../models/entry-model';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.page.html',
  styleUrls: ['./new-entry.page.scss'],
})
export class NewEntryPage implements OnInit {
  precision = 2;

  entry: EntryModel = new EntryModel();

  constructor(private entryServicve: EntriesService) { }

  ngOnInit() {
  }

  amountChanged(event: number) {
    this.entry.setValue = event / Math.pow(10, this.precision);
  }

  handleSubmit() {
    this.entryServicve.create(this.entry.getEntry());
    history.back();
  }

}
