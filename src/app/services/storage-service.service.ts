/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    this._storage = storage;
  }

  public async setValue(key: string, value: any): Promise<void> {
    if (this._storage) {
      await this._storage.set(key, JSON.stringify(value));
    }
  }

  public async getValue(key: string): Promise<any> {
    if (this._storage) {
      const value = await this._storage.get(key);
      return JSON.parse(value);
    } else {
      return '[]';
    }
  }
}
