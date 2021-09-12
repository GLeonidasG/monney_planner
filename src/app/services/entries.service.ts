import { Injectable } from '@angular/core';
import { ENTRY_STORAGE_KEY } from '../constants';
import { CreateEntryDTO, EntryModel } from '../models/entry-model';
import { StorageService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  constructor(private storage: StorageService) { }

  public async create(dto: CreateEntryDTO): Promise<void> {
    const entry = new EntryModel();
    entry.parseCreateDTO(dto);
    console.log(dto);
    const stringifiedEntryList = await this.storage.getValue(ENTRY_STORAGE_KEY);
    const entriesList = JSON.parse(stringifiedEntryList) as EntryModel[];
    entriesList.push(entry);
    await this.storage.setValue(ENTRY_STORAGE_KEY, JSON.stringify(entriesList));
  }

  public async list(): Promise<EntryModel[]> {
    const stringifiedEntryList = await this.storage.getValue(ENTRY_STORAGE_KEY);
    return JSON.parse(stringifiedEntryList) as EntryModel[];
  }

  public async findById(id: number): Promise<EntryModel> {
    const stringifiedEntryList = await this.storage.getValue(ENTRY_STORAGE_KEY);
    const entriesList = JSON.parse(stringifiedEntryList) as EntryModel[];
    return entriesList.find(entry => entry.getId === id);
  }

  public async findByTitle(id: number): Promise<EntryModel> {
    const stringifiedEntryList = await this.storage.getValue(ENTRY_STORAGE_KEY);
    const entriesList = JSON.parse(stringifiedEntryList) as EntryModel[];
    return entriesList.find(entry => entry.getId === id);
  }

  public async update(id: number, dto: CreateEntryDTO): Promise<void> {
    const entry = new EntryModel();
    entry.parseCreateDTO(dto);
    const stringifiedEntryList = await this.storage.getValue(ENTRY_STORAGE_KEY);
    const entriesList = JSON.parse(stringifiedEntryList) as EntryModel[];
    const entryIndex = entriesList.findIndex(_entry => _entry.getId === id);
    entriesList[entryIndex] = entry;
    await this.storage.setValue(ENTRY_STORAGE_KEY, JSON.stringify(entriesList));
  }

  public async delete(id: number): Promise<void> {
    const stringifiedEntryList = await this.storage.getValue(ENTRY_STORAGE_KEY);
    const entriesList = JSON.parse(stringifiedEntryList) as EntryModel[];
    entriesList.filter(_entry => _entry.getId !== id);
    await this.storage.setValue(ENTRY_STORAGE_KEY, JSON.stringify(entriesList));
  }

}
