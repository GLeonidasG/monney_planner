import { Component, OnInit } from '@angular/core';
import { EntryModel } from '../models/entry-model';
import { EntriesService } from '../services/entries.service';

const mockCredit = new EntryModel().parseCreateDTO({
  title: 'Credito',
  value: 5000.0,
  entryDate: new Date(),
  entryType: 'credito',
});

const mockDebit = new EntryModel().parseCreateDTO({
  title: 'Debito',
  value: 2500.5,
  entryDate: new Date(),
  entryType: 'debito',
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private entries: EntryModel[] = [];
  private incomes: EntryModel[] = [];
  private outcomes: EntryModel[] = [];
  constructor(private entriesService: EntriesService) {}

  async ngOnInit() {
    await this.fetchFromStorage();
  }

  private fetchFromStorage = async () => {
    const entries = await this.entriesService.list();
    const incomes = await this.entriesService.listCredits();
    const outcomes = await this.entriesService.listDebits();
    this.entries = entries;
    this.incomes = incomes;
    this.outcomes = outcomes;
  };

  public get getIncomes() {
    return this.incomes.length === 0
      ? 0
      : this.incomes
          .map((entry) => entry.getValue)
          .reduce((prv, nxt) => prv + nxt);
  }
  public get getOutcomes() {
    return this.outcomes.length === 0
      ? 0
      : this.outcomes
          .map((entry) => entry.getValue)
          .reduce((prv, nxt) => prv + nxt);
  }
  public get currentBalance() {
    let incomes = 0;
    let outcomes = 0;
    if (this.incomes.length !== 0) {
      incomes = this.getIncomes;
    }
    if (this.outcomes.length !== 0) {
      outcomes = this.getOutcomes;
    }
    return (incomes - outcomes).toFixed(2);
  }
  public get getEntries() {
    return this.entries;
  }

  public async simulate() {
    console.log('simulating...');
    await this.entriesService.create(mockDebit.getEntry());
    await this.entriesService.create(mockCredit.getEntry());
    await this.fetchFromStorage();
    console.log('%c mocked data created!', 'background: #222; color: #bada55');
  }
}
