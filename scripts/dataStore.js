(function (window) {
  'use strict';
  const App = window.App || {};
  const Promise = window.Promise;

  // this is constructor is NOT thread safe.
  function DataStore() {
    this.data = {};
  }

  function promiseResolvedWith(value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  }

  // DataStore.prototype.data = {};

  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
    return promiseResolvedWith(null);
  };

  DataStore.prototype.get = function (key) {
    return promiseResolvedWith(this.data[key]);
  };

  DataStore.prototype.getAll = function () {
    return promiseResolvedWith(this.data);
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
