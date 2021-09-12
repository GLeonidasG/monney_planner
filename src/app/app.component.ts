import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ENTRY_STORAGE_KEY } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor( private storage: Storage ) {}

  async ngOnInit() {
    await this.storage.create();
    console.log('Storage initialization');
    this.storage.set(ENTRY_STORAGE_KEY, '[]');
  }
}
