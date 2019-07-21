/// <reference path="index.d.ts" />
import IDataService = NSApp.IDataService;
import IData = NSApp.IData;

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

function init(dataStore: IDataService<IData>) {
    const truck = new Truck("ncc-1701", dataStore);
    const checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    // checkList.addDoubleClickHandler();
    const formHandler = new FormHandler(FORM_SELECTOR);

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
let dataStore: IDataService<IData> = new RemoteDataStore(SERVER_URL);
fetch("http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders")
    .then((res) => {
        if (!res.ok) {
            dataStore = new DataStore();
        }
    })
    .catch((err) => {
        console.log(err.toString());
        dataStore = new DataStore();
    })
    .then(() => {
        init(dataStore);
    });
