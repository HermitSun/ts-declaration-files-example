/// <reference types="jquery" />
/// <reference path="truck.d.ts" />

declare namespace NSApp {
    class CheckList {
        private $element: JQuery;

        constructor(selector: string);

        addClickHandler(fn: (customId: string) => Thenable<IData>): void;

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
