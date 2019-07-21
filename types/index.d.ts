/// <reference types="jquery" />
/// <reference path="validation.d.ts" />
/// <reference path="checklist.d.ts" />
/// <reference path="formHandler.d.ts" />
/// <reference path="dataService.d.ts" />
/// <reference path="remoteDataStore.d.ts" />
/// <reference path="dataStore.d.ts" />
/// <reference path="truck.d.ts" />

interface App<T = IData> {
    RemoteDataStore: new(url: string) => NSApp.RemoteDataStore<T>;
    DataStore: new() => NSApp.DataStore<T>;
    Truck: new(truckId: string, db: NSApp.IDataService<T>) => NSApp.Truck<T>; // satisfied LSP & DIP
    FormHandler: new(selector: string) => NSApp.FormHandler<T>;
    CheckList: new(selector: string) => NSApp.CheckList<T>;
    Validation: NSApp.Validation;
}

// expands global variable 'window'
interface Window {
    App: App
    jQuery: JQuery,
    $: JQuery
}
