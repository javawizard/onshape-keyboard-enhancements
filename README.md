# Javawizard's Onshape Keyboard Enhancements

Because I couldn't resist the acronym 😉

## Introduction

Javawizard's Onshape Keyboard Enhancements is a Tampermonkey script (read: simplified browser extension) that adds some additional keyboard shortcuts to Onshape.

JOKE adds the following keyboard shortcuts:

- <kbd>shift</kbd> + <kbd>8</kbd>: Switch to **Dimetric** view (analogous to Onshape's native <kbd>shift</kbd> + <kbd>7</kbd> for Isometric view)
- <kbd>shift</kbd> + <kbd>9</kbd>: Switch to **Trimetric** view (ditto)
- <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>P</kbd> (mac) or <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>P</kbd> (windows): Open the tool **search bar**. This is the keyboard shortcut [Visual Studio Code](https://code.visualstudio.com/) uses for the same thing and is equivalent to Onshape's native <kbd>⌥</kbd> + <kbd>C</kbd> which I can never seem to remember.
- <kbd>⌘</kbd> + <kbd>enter</kbd> (mac) or <kbd>ctrl</kbd> + <kbd>enter</kbd> (windows): **Commit the current feature.** This is the same as just pressing <kbd>enter</kbd> except that it also works when sketching (where the Enter key is normally intercepted to commit sketch features like dimensions and seemingly can't be used to commit the sketch itself).

With more to come. (Open an issue if there are any others you'd like to see!)

## Installation

First, install the [Tampermonkey browser add-on for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (also available for [Edge](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd), [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), and [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)). This lets you install "userscripts": small, self contained extensions like this one.

Then open the [JOKE userscript file](https://raw.githubusercontent.com/javawizard/onshape-keyboard-enhancements/main/joke.user.js). If you've installed Tampermonkey correctly, it should prompt you to install it as a userscript:

![Installation screenshot](install-screenshot.png)

