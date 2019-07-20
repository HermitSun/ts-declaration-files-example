/// <reference types="jquery" />
/// <reference path="validation.d.ts" />
/// <reference path="checklist.d.ts" />
/// <reference path="formHandler.d.ts" />
/// <reference path="dataService.d.ts" />
/// <reference path="remoteDataStore.d.ts" />
/// <reference path="dataStore.d.ts" />
/// <reference path="truck.d.ts" />

interface App {
    RemoteDataStore: new(url: string) => NSApp.RemoteDataStore;
    DataStore: new() => NSApp.DataStore;
    Truck: new(truckId: string, db: NSApp.IDataService) => NSApp.Truck; // satisfied LSP & DIP
    FormHandler: new(selector: string) => NSApp.FormHandler;
    CheckList: new(selector: string) => NSApp.CheckList;
    Validation: NSApp.Validation;
}

// expands global variable 'window'
interface Window {
    App: App
    jQuery: JQuery,
    $: JQuery
}
