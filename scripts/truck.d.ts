/// <reference path="dataService.d.ts" />

declare namespace NSApp {
    class Truck {
        private truckId: string;
        private db: IDataService;

        constructor(truckId: string, db: IDataService);

        createOrder(order: IOrder): void;

        deliverOrder(customId: string);

        printOrders(): void;
    }

    interface IOrder {
        emailAddress: string;
        coffee: string;
        size: "short" | "tall" | "grande";
        flavor: "" | "caramel" | "almond" | "mocha";
        strength: string;

        [coffee: string]: string;
    }
}
