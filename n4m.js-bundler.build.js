
/**
 * This file has been auto-generated in order to prepare external projects using NPM dependencies etc
 * for usage in the [js] and [jsui] object in Max MSP. Any manual changes might be overwritten when regenerating this
 * file. In case you'd like to learn more, report issues etc - pleaser refer to the Project on GitHub:
 *
 * https://github.com/fde31/max-js-bundler
 *
 */
var log = function log() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  post("".concat(args.join(", "), "\n"));
};

var bang = function bang(number) {
  log("Received bang");
};

var msg_int = function msg_int(number) {
  log("Received int: ".concat(number));
};

var msg_float = function msg_float(number) {
  log("Received float: ".concat(number));
};

var anything = function anything() {
  log("Received anything:");

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  log(args);
};
