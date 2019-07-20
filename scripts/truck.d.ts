/// <reference path="dataStore.d.ts" />

declare namespace NSApp {
    class Truck {
        private truckId: string;
        private db: DataStore;

        constructor(truckId: string, db: DataStore);

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
