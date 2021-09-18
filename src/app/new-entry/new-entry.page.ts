import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private entryServicve: EntriesService, private router: Router) {}

  ngOnInit() {}

  amountChanged(event: number) {
    this.entry.setValue = event / Math.pow(10, this.precision);
  }

  async handleSubmit(form) {
    console.log(form)
    await this.entryServicve.create(this.entry.getEntry());
    this.entry = new EntryModel();
    this.router.navigateByUrl('/home');
    // this.router.navigate(['/home'], { replaceUrl: true });
  }
}
