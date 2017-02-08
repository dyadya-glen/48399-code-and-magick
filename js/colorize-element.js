'use strict';

window.colorizeElement = function (element, colors, property) {
  var ENTER_KEY_CODE = 13;
  var currentColor = null;

  element.addEventListener('click', onСhangeСurrentColor);
  element.addEventListener('keydown', onPressСhangeСurrentColor);

  function changetColor() {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  }

  function onPressСhangeСurrentColor(event) {
    if (event.keyCode && event.keyCode === ENTER_KEY_CODE) {
      changetColor();
    }
  }

  function onСhangeСurrentColor() {
    changetColor();
  }
};
