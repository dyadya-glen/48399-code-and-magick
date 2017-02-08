'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = null;

  element.addEventListener('click', onСhangeСurrentColor);
  element.addEventListener('keydown', onPressСhangeСurrentColor);

  function changetColor() {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  }

  function onPressСhangeСurrentColor(event) {
    if (window.isActivateEvent(event)) {
      changetColor();
    }
  }

  function onСhangeСurrentColor() {
    changetColor();
  }
};
