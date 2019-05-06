n4m-js-bundler
==============

## Description

Node For Max helper utility to bundle/wrap code for usage in [js] and [jsui]. This project simply wraps the [`max-js-bundler`](https://github.com/fde31/max-js-bundler) CLI tool in a way that it is accessible from Max using node.script. Node.script does not really do any magic work here and only serves as a helping tool to perform the necessary npm commands straight from the Max patch This serves mainly as a boilerplate to showcase how something like this can be achieved. So please feel free to take this project and turn into something even more useful for you.

## Instructions

In order to use this patch start with the following:

* Download the repository to your computer
* Open the `n4m.js-bundler-example` Max Patch

Once you see the patch there are a few initial steps we have go through first:

1. *Installing Dependencies*: Hit the `script npm ci` message to install the project's dependencies, which includes the `max-js-bundler` tool, which is used to build your files.
2. *Starting the Bundler Process*: Hit the `script start` message in order to start the bundler process.

In order to deal with file input the patch provides three buttons:

* *Select File*: Opens a dialog to select and build the chosen JS file
* *Rebuild*: Use this to rebuild a JS Filer after it has been chosen via `Select File`
* *Open File*: Allows you to open the source JS File for editing.

When building JS files the bundler adds a `.build` prior to the extension of the source file name and places it in the same location. Probably easier to understand with a few examples:

```
myscript.js => myscript.build.js
n4m.bundle.me.js => n4m.bundle.me.build.js
```

The bottom of the patch has a status comment that reports on the current status of the bundler process. After a successful build you can use:

* *Open File*: to open the build JS File
* *Reveal File*: to reveal the build JS File in the File Explorer / Finder

## Issues & Questions

In case you encounter any issues or have questions feel free to contribute by making a [new Issue](https://github.com/fde31/n4m-js-bundler/issues/new). Thanks!

## License

[MIT](./LICENSE.md)