/// <reference path="dataService.d.ts" />

declare namespace NSApp {
    class RemoteDataStore<T> implements IDataService<T> {
        private serverUrl: string;

        constructor(url: string);

        add(key: string, val: T): Thenable<T>;

        get(key: string, cb?: (response: any) => void): Thenable<T>;

        getAll(cb?: (response: any) => void): Thenable<T>;

        remove(key: string): Thenable<T>;
    }
}
