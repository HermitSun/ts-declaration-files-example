/// <reference path="index.d.ts" />

// init
const FORM_SELECTOR = "[data-coffee-order=\"form\"]";
const CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
const SERVER_URL = "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders";
const App = window.App;
const DataStore = App.DataStore;
const RemoteDataStore = App.RemoteDataStore;
const Truck = App.Truck;
const FormHandler = App.FormHandler;
const Validation = App.Validation;
const CheckList = App.CheckList;

const dateStore = new DataStore();
const remoteDS = new RemoteDataStore(SERVER_URL);
const truck = new Truck("ncc-1701", remoteDS);
const checkList = new CheckList(CHECKLIST_SELECTOR);
checkList.addClickHandler(truck.deliverOrder.bind(truck));
// checkList.addDoubleClickHandler();
const formHandler = new FormHandler(FORM_SELECTOR);

// add listeners
formHandler.addSubmitHandler((data) => {
    truck.createOrder.call(truck, data);
    checkList.addRow.call(checkList, data);
    // let color = "";
    // if (data.flavor === "") {
    //     color = "red";
    // } else if (data.flavor === "caramel") {
    //     color = "orange";
    // } else if (data.flavor === "almond") {
    //     color = "green";
    // } else {
    //     color = "blue";
    // }
    // $("div.checkbox label").css({color});
});
formHandler.addInputHandler(Validation.isCompanyEmail);
formHandler.addRangeHandler(Validation.isDecaf);
