/// <reference path="dataService.d.ts" />

declare namespace NSApp {
    class RemoteDataStore implements IDataService {
        private serverUrl: string;

        constructor(url: string);

        add(key: string, val: any): void;

        get(key: string): any;

        getAll(): IData;

        remove(key: string): void;
    }
}
