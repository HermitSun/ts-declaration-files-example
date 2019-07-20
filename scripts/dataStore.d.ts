declare namespace NSApp {
    class DataStore {
        private data: IData;

        constructor();

        add(key: string, val: any): void;

        get(key: string): any;

        getAll(): IData;

        remove(key: string): void;
    }

    interface IData {
        [email: string]: any;
    }
}
