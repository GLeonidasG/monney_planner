export type EntryType = 'credito' | 'debito';

export interface CreateEntryDTO {
    title: string;
    value: number;
    entryDate: Date;
    entryType: EntryType;
};

export class EntryModel {
    private id?: number;
    private title: string;
    private value: number;
    private entryDate: Date;
    private entryType: EntryType;

    public get getId() { return this.id; }
    public set setId(id: number) { this.id = id; }
    public get getTitle() { return this.title; }
    public set setTitle(title: string) { this.title = title; }
    public get getValue() { return this.value; }
    public set setValue(value: number) { this.value = value; }
    public get getEntryDate() { return this.entryDate; }
    public set setEntryDate(entryDate: Date) { this.entryDate = entryDate; }
    public get getEntryType() { return this.entryType; }
    public set setEntryType(entryType: EntryType) { this.entryType = entryType; }

    public parseCreateDTO(data: CreateEntryDTO) {
        const { entryDate, entryType, title, value, } = data;
        this.entryDate = entryDate;
        this.entryType = entryType;
        this.title = title;
        this.value = value;
        return this;
    }

    public getEntry(): CreateEntryDTO {
        return {
            entryDate: this.entryDate,
            entryType: this.entryType,
            title: this.title,
            value: this.value,
        };
    }
}
