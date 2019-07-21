declare namespace NSApp {
    interface Validation {
        isCompanyEmail(email: string): boolean;

        /** @deprecated */
        isDecaf(coffee: string, strength: number): boolean;
    }
}
