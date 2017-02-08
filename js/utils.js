'use strict';

window.utils = {
  getRandomElement: function (colors) {
    var roandomElementIndex = Math.floor(Math.random() * colors.length);
    return colors[roandomElementIndex];
  },

  getRandomElementExcept: function (colors, currentColor) {
    var newColor = currentColor;
    while (newColor === currentColor) {
      newColor = window.utils.getRandomElement(colors);
    }
    return newColor;
  }
};
