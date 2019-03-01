n4m-js-bundler
==============

## Description

Node For Max helper utility to bundle/wrap code for usage in [js] and [jsui]. This project simply wraps the [`max-js-bundler`](https://github.com/fde31/max-js-bundler) CLI tool in a way that it is accessible from Max using node.script. Node.script does not really do any magic work here and only serves as a helping tool to perform the necessary npm commands straight from the Max patch This serves mainly as a boilerplate to showcase how something like this can be achieved. So please feel free to take this project and turn into something even more useful for you.

## Instructions

In order to use this patch start with the following:

* Download the repository to your computer
* Open the `n4m.js-bundler-example` Max Patch

Once you opened the patch you will see a basic structure. The left side is used for managing and building our `js` project, while the right side shows the usage of the resulting file. There are a few key components / steps involved. The `node.script` object is used as a portal in order to manage our js project using `npm`. Therefore be aware that the `node.script` points at our `js` file (n4m.js-bundler) but is actually never started. To operate the system follow the following:

1. *Installing Dependencies*: Hit the `script npm ci` message to install the project's dependencies, which includes the `max-js-bundler` tool, which is used to build your files.
2. *Building*: Hit the `script npm run build` message in order to have your project built for usage in `[js]`. This creates a `n4m.js-bundler.build.js` file.

The `[js]` object on the right points to our compatible, built version of the `n4m.js-bundler.js` and you should be able to use/operate it as expected.

### Using it for your own project

This boilerplate can easily be used in your own project. For that simply copy the directory and make sure to rename the files to your liking. As an example we rename our source `js` file to `my-amazing-code.js`. Notice that we'll have to adopt:

1. Rename `n4m.js-bundler.js` to `my-amazing-code.js`
2. Open the `package.json` file and make sure to adjust the `build` entry under `scripts`. It should look something like this:
```json
 "scripts": {
    "build": "max-js-bundler build ./my-amazing-code.js --output my-amazing-code.build.js --force"
  }
```
3. Change the first argument of the `node.script` object so that it points to `my-amazing-code.js`
4. Change the first argument of the `[js]` object to `my-amazing-code.build.js`


### Using NPM packages

You'd like to use other packages from `npm` in your project? Generally no problem. Make sure to install them as a *dependency* to your project and they should successfully be considered in your bundle. To do so simply send a message to the `node.script` object: `script npm install <pkg_name>`. So for example to install the [`tonal`](https://www.npmjs.com/package/tonal) package you'd send the following message once: `script npm install tonal`.

### Using the built `js` file

You can of course consume the built JavaScript file in all of your patches. Just make sure to include it with your project or have it available in your Search Path.

## Issues & Questions

In case you encounter any issues or have questions feel free to contribute by making a [new Issue](https://github.com/fde31/n4m-js-bundler/issues/new). Thanks!

## License

[MIT](./LICENSE.md)