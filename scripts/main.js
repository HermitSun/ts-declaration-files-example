/// <reference path="index.d.ts" />
// init
var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
var CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
var SERVER_URL = "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders";
var App = window.App;
var DataStore = App.DataStore;
var RemoteDataStore = App.RemoteDataStore;
var Truck = App.Truck;
var FormHandler = App.FormHandler;
var Validation = App.Validation;
var CheckList = App.CheckList;
var dateStore = new DataStore();
var remoteDS = new RemoteDataStore(SERVER_URL);
var truck = new Truck("ncc-1701", remoteDS);
var checkList = new CheckList(CHECKLIST_SELECTOR);
checkList.addClickHandler(truck.deliverOrder.bind(truck));
// checkList.addDoubleClickHandler();
var formHandler = new FormHandler(FORM_SELECTOR);
// add listeners
formHandler.addSubmitHandler(function (data) {
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
