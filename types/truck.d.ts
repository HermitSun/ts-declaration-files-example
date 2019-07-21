/// <reference path="dataService.d.ts" />
/// <reference path="data.d.ts" />
/// <reference path="order.d.ts" />

declare namespace NSApp {
    class Truck {
        private truckId: string;
        private db: IDataService<IData>;

        constructor(truckId: string, db: IDataService<IData>);

        createOrder(order: IOrder): Thenable<IData>;

        deliverOrder(customId: string): Thenable<IData>;

        printOrders(printFn?: (order: IOrder) => void): Thenable<IData>;
    }
}
