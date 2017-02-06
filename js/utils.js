'use strict';

window.utils = {
  getRandomElement: function (colors) {
    var RoandomElementIndex = Math.floor(Math.random() * colors.length);
    return colors[RoandomElementIndex];
  },

  getRandomElementExcept: function (colors, currentColor) {
    var newColor = null;
    while (!newColor || newColor === currentColor) {
      newColor = window.utils.getRandomElement(colors);
    }
    return newColor;
  }
};
