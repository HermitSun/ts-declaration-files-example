declare namespace NSApp {
    // represents Promise & jQuery's Deferred Object
    // default generics can strengthen its robustness
    interface Thenable<T> {
        then<TResult = T>(onfulfilled?: OnFullFilledCallback<TResult>): Thenable<TResult>;
    }

    type OnFullFilledCallback<T> = ((value: T) => T | Thenable<T>) | void;
}
