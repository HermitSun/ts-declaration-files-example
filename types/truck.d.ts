/// <reference path="dataService.d.ts" />
/// <reference path="data.d.ts" />
/// <reference path="order.d.ts" />

declare namespace NSApp {
    class Truck<T> {
        private truckId: string;
        private db: IDataService<T>;

        constructor(truckId: string, db: IDataService<T>);

        createOrder(order: IOrder): Thenable<T>;

        deliverOrder(customId: string): Thenable<T>;

        printOrders(printFn?: (order: IOrder) => void): Thenable<T>;
    }
}
