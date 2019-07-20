/// <reference path="dataService.d.ts" />

declare namespace NSApp {
    class DataStore implements IDataService {
        private data: IData;

        constructor();

        add(key: string, val: any): void;

        get(key: string): any;

        getAll(): IData;

        remove(key: string): void;
    }
}
