import { EventEmitter } from "events";

// Showcasing that you can use an ES6 Class here
class Logger extends EventEmitter {

	constructor() {
		super();
	}

	log(...args) {
		post(`${args.join(", ")}\n`);
		this.emit("log", ...args);
	}
}

const logger = new Logger();

// We are using the EventEmitter class to showcase access to Node modules
logger.on("log", (...args) => {
	post("---\n");
});

const bang = number => {
	logger.log("Received bang");
};

const msg_int = number => {
	logger.log(`Received int: ${number}`);
};

const msg_float = number => {
	logger.log(`Received float: ${number}`);
};

const anything = (...args) => {
	logger.log(`Received anything: ${args}`);
};