// ==UserScript==
// @name         Javawizard's Onshape Keyboard Enhancements
// @namespace    https://github.com/javawizard/onshape-keyboard-enhancements
// @description  A Tampermonkey script that adds some useful keyboard shortcuts to Onshape, like shift + 9 to flip to trimetric view
// @version      0.1
// @author       Alex Boyd (javawizard)
// @match        https://cad.onshape.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Note that jQuery won't be loaded at this point. That's fine because we're
  // attaching the event handler to the document by hand and only invoking jQuery
  // when the user presses a key on their keyboard, but if we ever need to use
  // jQuery right at page load, we'll need to add some sort of setTimeout loop
  // that waits until window.$ is no longer undefined.

  console.log("JOKE: Javawizard's Onshape Keyboard Enhancements loaded, see https://github.com/javawizard/onshape-keyboard-enhancements for details");

  const isMac = window.navigator.platform.includes('Mac');

  document.addEventListener('keydown', event => {
    if (event.isComposing || event.repeat) {
      // User is in the middle of an IME composition sequence or this is a
      // repeated key press (i.e. the user is holding down the key which is
      // causing keydown events to repeatedly fire). Ignore both.
      return;
    }

    // On Mac, whether the command key is pressed; on Windows, whether the control key is pressed.
    const commandOrControlKey = isMac ? event.metaKey : event.controlKey;

    if (event.shiftKey && event.code == 'Digit8') {
      // Press shift + 8 for dimetric view

      // Amusingly, context items in the dropdown menu below the cube react
      // to mouseup events rather than click events - so that's what we fire
      // when we need to select them. (TODO: see if that's true for other
      // context menus as well)

      window.$('div.os-graphics-dropdown').click(); // click the cube dropdown menu
      window.$('li.context-menu-item:contains("Dimetric")').mouseup(); // click "dimetric"
    } else if (event.shiftKey && event.code == 'Digit9') {
      // Press shift + 9 for trimetric view

      window.$('div.os-graphics-dropdown').click(); // click the cube dropdown menu
      window.$('li.context-menu-item:contains("Trimetric")').mouseup(); // click "trimetric"
    } else if (commandOrControlKey && event.shiftKey && event.code == 'KeyP') {
      // Press cmd (on mac) or ctrl (on windows) + shift + P to open the tool search bar
      // This is Visual Studio Code's keyboard shortcut for the same thing, and I cannot
      // for the life of me train my fingers to use Onshape's native option + C shortcut.
      // Userscripts to the rescue!
      //
      // Note that the "search tools..." button must be visible since we're opening the
      // search dialog by clicking it. Ideally we'd fire a synthetic option + C keypress
      // instead but I can't seem to find the right combination of target element +
      // synthetic event attributes to get Onshape to open the search bar. TODO: revisit
      // this...

      window.$('.command-search-trigger').click(); // click the "search tools..." button
    } else if (commandOrControlKey && event.code == 'Enter') {
      // Press cmd (on mac) or ctrl (on windows) + Enter to save/commit the current feature.
      // This is the same as just pressing "Enter" except that it also works when sketching
      // (where the Enter key is normally intercepted to commit sketch features like
      // dimensions and seemingly can't be used to commit the sketch itself).

      window.$('.feature-dialog .ns-dialog-button-ok').click(); // click the green check mark button in the feature details dialog
    } else {
      // Uncomment to discover what the keycode is for a particular key that doesn't yet have an associated keyboard shortcut
      // console.log("JOKE: key pressed that we don't care about:", event.code, 'with details:', event);
    }
  });
})();