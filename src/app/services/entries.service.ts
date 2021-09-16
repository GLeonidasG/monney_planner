import { Injectable } from '@angular/core';
import { ENTRY_STORAGE_KEY } from '../constants';
import { CreateEntryDTO, EntryModel } from '../models/entry-model';
import { StorageService } from './storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  constructor(private storage: StorageService) {}

  public async create(dto: CreateEntryDTO): Promise<void> {
    const entry = new EntryModel();
    entry.parseCreateDTO(dto);
    const entriesList = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as EntryModel[];
    entriesList.push(entry);
    await this.storage.setValue(ENTRY_STORAGE_KEY, entriesList);
  }

  public async list(): Promise<EntryModel[]> {
    const entryList: EntryModel[] = await this.storage.getValue(
      ENTRY_STORAGE_KEY
    );
    return entryList.reverse();
  }

  public async listCredits(): Promise<EntryModel[]> {
    const list = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as CreateEntryDTO[];
    return list
      .filter((entry) => entry.entryType === 'credito')
      .map((entry) => new EntryModel().parseCreateDTO(entry));
  }

  public async listDebits(): Promise<EntryModel[]> {
    const entryList = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as CreateEntryDTO[];
    return entryList
      .filter((entry) => entry.entryType === 'debito')
      .map((entry) => new EntryModel().parseCreateDTO(entry));
  }

  public async findById(id: number): Promise<EntryModel> {
    const entriesList = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as EntryModel[];
    return entriesList.find((entry) => entry.getId === id);
  }

  public async findByTitle(id: number): Promise<EntryModel> {
    const entriesList = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as EntryModel[];
    return entriesList.find((entry) => entry.getId === id);
  }

  public async update(id: number, dto: CreateEntryDTO): Promise<void> {
    const entry = new EntryModel();
    entry.parseCreateDTO(dto);
    const entriesList = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as EntryModel[];
    const entryIndex = entriesList.findIndex((_entry) => _entry.getId === id);
    entriesList[entryIndex] = entry;
    await this.storage.setValue(ENTRY_STORAGE_KEY, entriesList);
  }

  public async delete(id: number): Promise<void> {
    const entriesList = (await this.storage.getValue(
      ENTRY_STORAGE_KEY
    )) as EntryModel[];
    entriesList.filter((_entry) => _entry.getId !== id);
    await this.storage.setValue(ENTRY_STORAGE_KEY, entriesList);
  }
}
