import { Component, Input, OnInit } from '@angular/core';
import { EntryModel } from '../models/entry-model';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {

  @Input() entries: EntryModel[] = [];
  constructor() { }

}
