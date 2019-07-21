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
function init() {
    var truck = new Truck("ncc-1701", dataStore);
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    // checkList.addDoubleClickHandler();
    var formHandler = new FormHandler(FORM_SELECTOR);
    // add listeners
    formHandler.addSubmitHandler(function (data) {
        return truck.createOrder.call(truck, data)
            .then(function () {
            checkList.addRow.call(checkList, data);
        }, function () {
            alert("Server unreachable. Try again later");
        });
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
    truck.printOrders(checkList.addRow.bind(checkList));
    // formHandler.addRangeHandler(Validation.isDecaf);
}
// prevent network interruption
var dataStore = new RemoteDataStore(SERVER_URL);
fetch("http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders")
    .then(function (res) {
    if (!res.ok) {
        dataStore = new DataStore();
    }
})["catch"](function (err) {
    console.log(err.toString());
    dataStore = new DataStore();
})
    .then(function () {
    init();
});
