(function (window) {
  'use strict';
  const App = window.App || {};
  const $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addClickHandler = function (fn) {
    this.$element.on('click', 'input', function (event) {
      const email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  CheckList.prototype.addDoubleClickHandler = function () {
    this.$element.on('dblclick', 'input', function (event) {
      const email = event.target.value;
      this.editRow(email);
    }.bind(this));
  };

  CheckList.prototype.addRow = function (coffeeOrder) {
    this.removeRow(coffeeOrder.emailAddress);
    const rowElement = new Row(coffeeOrder);
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function (email) {
    this.$element
      .find(`[value="${email}"]`)
      .closest('[data-coffee-order="checkbox"]')
      .remove();
  };

  CheckList.prototype.editRow = function (email) {
    let content = $(`div.checkbox label > [value="${email}"]`)
      .parent()
      .text();
    const temp = content.split(' ');
    const size = temp[0];
    let temp1;
    let flavor = '';
    if (temp.length === 6) {
      flavor = temp[1];
      temp1 = content.substring(size.length + 1 + flavor.length).split(', ');
    } else {
      temp1 = content.substring(size.length).split(', ');
    }
    const coffee = temp1[0];
    const temp2 = temp1[1].split(') [');
    const strength = temp2[1].substring(0, temp2[1].length - 2);
    $('input[name="coffee"]').val(coffee);
    $('input[name="emailAddress"]').val(email);
    $('input[type="radio"]').each(function () {
      const current = $(this);
      if (current.val() === size) {
        current.attr('checked', 'checked');
      } else {
        current.removeAttr('checked');
      }
    });
    $('select[name="flavor"]')
      .children()
      .each(function () {
        const current = $(this);
        if (current.val() === flavor) {
          current.attr('selected', 'selected');
        } else {
          current.removeAttr('selected');
        }
      });
    $('input[type="range"]').val(strength);
  };

  function Row(coffeeOrder) {
    const $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'checkbox'
    });
    const $label = $('<label></label>');
    const $checkbox = $('<input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress
    });
    let description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
      description += coffeeOrder.flavor + ' ';
    }
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);
    this.$element = $div;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
