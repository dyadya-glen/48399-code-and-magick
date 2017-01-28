'use strict';

var setupWizard = document.querySelector('.setup');
var setupOpenWizard = document.querySelector('.setup-open');
var setupCloseWizard = setupWizard.querySelector('.setup-close');
var userName = setupWizard.querySelector('.setup-user-name');
var wizardCoat = document.getElementById('wizard-coat');
var wizardEyes = document.getElementById('wizard-eyes');
var setupFireball = setupWizard.querySelector('.setup-fireball-wrap');
var indexColor = 0;
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

userName.required = true;
userName.maxLength = 50;

setupOpenWizard.addEventListener('click', function () {
  setupWizard.classList.remove('invisible');
});

setupCloseWizard.addEventListener('click', function () {
  setupWizard.classList.add('invisible');
});

wizardCoat.addEventListener('click', choiceOfColorCoat);

wizardEyes.addEventListener('click', choiceOfColorEyes);

setupFireball.addEventListener('click', choiceOfColorFireball);

function choiceOfColorCoat() {
  var nextIndexColor = ++indexColor;
  if (!wizardCoatColors[nextIndexColor]) {
    nextIndexColor = 0;
  }
  wizardCoat.style.fill = wizardCoatColors[nextIndexColor];
  indexColor = nextIndexColor;
}

function choiceOfColorEyes() {
  var nextIndexColor = ++indexColor;
  if (!wizardEyesColors[nextIndexColor]) {
    nextIndexColor = 0;
  }
  wizardEyes.style.fill = wizardEyesColors[nextIndexColor];
  indexColor = nextIndexColor;
}

function choiceOfColorFireball() {
  var colorIndex = Math.floor(Math.random() * fireballColors.length);
  setupFireball.style.backgroundColor = fireballColors[colorIndex];
}
