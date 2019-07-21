/// <reference path="thenable.d.ts" />

declare namespace NSApp {
    interface IDataService<T> {
        add(key: string, val: T): Thenable<T>;

        get(key: string, cb?: (response: any) => void): Thenable<T>;

        getAll(cb?: (response: any) => void): Thenable<T>;

        remove(key: string): Thenable<T>;
    }
}
