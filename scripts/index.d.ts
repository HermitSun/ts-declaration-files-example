/// <reference types="jquery" />
/// <reference path="validation.d.ts" />
/// <reference path="checklist.d.ts" />
/// <reference path="formHandler.d.ts" />
/// <reference path="dataStore.d.ts" />
/// <reference path="truck.d.ts" />

interface App {
    DataStore: new() => NSApp.DataStore;
    Truck: new(truckId: string, db: NSApp.DataStore) => NSApp.Truck;
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
