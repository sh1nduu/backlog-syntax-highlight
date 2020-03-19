# Backlog Syntax Highlight

Chrome plugin adding syntax colors to backlog pull requests.

## Requirements

* nodenv

## Build

```
$ yarn build
```

## Setup

* Build this project
* Open `chrome://extensions/`
* Enable developer mode
* Click unpackaged extensions
* Select this project folder
* Access your backlog project and open a pull request diff page
  * If colors doesn't appears, reload your browser

## Supported languages

This plugin provides all languages of [highlight.js](https://highlightjs.org/). But sometimes highlight isn't applied in current version.

## Customize themes

Open manifest.json and rewrite a css filename to your preffered theme's css. Available themes are in `node_modules/highlight.js/styles/`.

