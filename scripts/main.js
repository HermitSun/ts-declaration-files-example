/// <reference path="index.d.ts" />
// init
var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
var CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
var App = window.App;
var DataStore = App.DataStore;
var Truck = App.Truck;
var FormHandler = App.FormHandler;
var Validation = App.Validation;
var CheckList = App.CheckList;
var truck = new Truck("ncc-1701", new DataStore());
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
