'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];

  element.addEventListener('click', onСhangeСurrentColor);
  element.addEventListener('keydown', onPressonСhangeСurrentColor);

  function onPressonСhangeСurrentColor(event) {
    if (window.isActivateEvent(event)) {
      onСhangeСurrentColor();
    }
  }

  function onСhangeСurrentColor() {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  }
};
