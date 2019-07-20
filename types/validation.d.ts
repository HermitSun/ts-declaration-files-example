declare namespace NSApp {
    interface Validation {
        isCompanyEmail(email: string): boolean;

        isDecaf(coffee: string, strength: number): boolean;
    }
}
