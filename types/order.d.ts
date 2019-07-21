declare namespace NSApp {
    interface IOrder {
        emailAddress: string;
        coffee: string;
        size: "short" | "tall" | "grande";
        flavor: "" | "caramel" | "almond" | "mocha";
        strength: string;

        [coffee: string]: string;
    }
}
