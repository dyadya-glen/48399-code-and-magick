'use strict';

var setupWizard = document.querySelector('.setup');
var setupOpenWizard = document.querySelector('.setup-open');
var setupCloseWizard = setupWizard.querySelector('.setup-close');
var userName = setupWizard.querySelector('.setup-user-name');
var wizardCoat = document.getElementById('wizard-coat');
var wizardEyes = document.getElementById('wizard-eyes');
var setupFireball = setupWizard.querySelector('.setup-fireball-wrap');
var setupSubmit = setupWizard.querySelector('.setup-submit');
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

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

userName.required = true;
userName.maxLength = 50;

window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
window.colorizeElement(setupFireball, fireballColors, 'backgroundColor');

setupOpenWizard.addEventListener('click', onShowSetupWizard);
setupOpenWizard.addEventListener('keydown', onPressShowSetupWizard);
setupCloseWizard.addEventListener('click', onHideSetupWizard);
setupCloseWizard.addEventListener('keydown', onPressHideSetupWizard);
setupSubmit.addEventListener('click', onSaveSetupWizard);
setupSubmit.addEventListener('keydown', onPressSaveSetupWizard);

function isActivateEvent(event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
}

function setupKeydownHendler(event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    onHideSetupWizard();
  }
}

function onShowSetupWizard(event) {
  setupWizard.classList.remove('invisible');
  setupWizard.setAttribute('aria-hidden', false);
  setupOpenWizard.setAttribute('aria-pressed', true);
  document.addEventListener('keydown', setupKeydownHendler);
}

function onHideSetupWizard() {
  setupWizard.classList.add('invisible');
  setupWizard.setAttribute('aria-hidden', true);
  setupOpenWizard.setAttribute('aria-pressed', false);
  document.removeEventListener('keydown', setupKeydownHendler);
}

function onPressShowSetupWizard(event) {
  if (isActivateEvent(event)) {
    onShowSetupWizard(event);
  }
}

function onPressHideSetupWizard(event) {
  if (isActivateEvent(event)) {
    onHideSetupWizard();
  }
}

function onSaveSetupWizard(event) {
  event.preventDefault();
  onHideSetupWizard();
}

function onPressSaveSetupWizard(event) {
  event.preventDefault();
  if (isActivateEvent(event)) {
    onHideSetupWizard();
  }
}
