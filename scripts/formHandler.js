(function (window) {
  'use strict';
  const App = window.App || {};
  const $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  // here looks like 'template method pattern'
  FormHandler.prototype.addSubmitHandler = function (fn) {
    this.$formElement.on('submit', function (event) {
      event.preventDefault();
      const data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
      });
      console.log(data);
      fn(data) // replaceable methods will be placed here
        .then(function () {
          this.reset();
          this.elements[0].focus();
        }.bind(this));
    });
  };

  FormHandler.prototype.addInputHandler = function (fn) {
    this.$formElement.on('input', '[name="emailAddress"]', function (event) {
      const emailAddress = event.target.value;
      let message = '';
      if (fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };

  FormHandler.prototype.addRangeHandler = function (validator) {
    this.$formElement.on('change', '[type="range"]', function (event) {
      let message = '';
      const strength = Number(event.target.value);
      const coffee = $('input[name="coffee"]').val();
      if (coffee === '') {
        message = 'No coffee input.';
      } else if (!validator(coffee, strength)) {
        message = coffee + ' is not a cup of decaf.';
      }
      console.log(message);
      event.target.setCustomValidity(message);
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
