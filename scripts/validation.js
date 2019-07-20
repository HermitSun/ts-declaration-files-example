(function (window) {
  'use strict';
  const App = window.App || {};
  App.Validation = {
    isCompanyEmail: function (email) {
      return /.+bignerdranch\.com$/.test(email);
    },
    isDecaf: function (coffee, strength) {
      return !(coffee.includes('decaf') && strength > 20);
    }
  };
  window.App = App;
})(window);
