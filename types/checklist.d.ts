/// <reference types="jquery" />
/// <reference path="truck.d.ts" />

declare namespace NSApp {
    class CheckList<T> {
        private $element: JQuery;

        constructor(selector: string);

        addClickHandler(fn: (customId: string) => Thenable<T>): void;

        /** @deprecated */
        addDoubleClickHandler(): void;

        addRow(coffeeOrder: IOrder): void;

        removeRow(email: string): void;

        editRow(email: string): void;
    }

    namespace CheckList {
        class Row {
            $element: JQuery; // this is a public prop...but we SHOULD be sync with its JS realization, right?

            constructor(coffeeOrder: IOrder);
        }
    }
}
