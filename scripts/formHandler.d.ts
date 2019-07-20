/// <reference types="jquery" />

declare namespace NSApp {
    class FormHandler {
        private $formElement: JQuery;

        constructor(selector: string);

        addSubmitHandler(fn: (order: IOrder) => void);

        addInputHandler(fn: (email: string) => boolean): void;

        addRangeHandler(validator: (coffee: string, strength: number) => boolean): void;
    }
}
