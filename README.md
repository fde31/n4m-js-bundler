n4m-js-bundler
==============

## Description

Node For Max helper utility to bundle/wrap code for usage in [js] and [jsui]. This project simply wraps the `max-js-bundler` CLI tool in a way that it is accessible from Max using node.script. This serves mainly as a boilerplate to showcase how something like this can be achieved. So please feel free to take this project and turn into something even more useful for you.

## Instructions

To use this:

* Download the repository to your computer
* Place the content in your search path
* Open the `n4m.js-bundler` Max Patch
* Click the `script npm ci` message to install all necessary dependencies
* Send the filename of the `.js` file you'd like to bundle into the `absolutepath` object
* It should create a file *next* to the input file on disk with the extension `.build.js`

## License

[MIT](./LICENSE.md)