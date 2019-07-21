/// <reference types="jquery" />

declare namespace NSApp {
    class FormHandler<T> {
        private $formElement: JQuery;

        constructor(selector: string);

        addSubmitHandler(fn: (order: IOrder) => Thenable<T>);

        addInputHandler(fn: (email: string) => boolean): void;

        /** @deprecated */
        addRangeHandler(validator: (coffee: string, strength: number) => boolean): void;
    }
}
