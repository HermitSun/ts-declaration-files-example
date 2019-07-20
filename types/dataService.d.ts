declare namespace NSApp {
    interface IDataService {
        add(key: string, val: any): void;

        get(key: string): any;

        getAll(): IData;

        remove(key: string): void;
    }

    interface IData {
        [email: string]: any;
    }
}
