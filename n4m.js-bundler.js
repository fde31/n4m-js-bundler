
const log = (...args) => {
	post(`${args.join(", ")}\n`);
};

const bang = number => {
	log("Received bang");
};

const msg_int = number => {
	log(`Received int: ${number}`);
};

const msg_float = number => {
	log(`Received float: ${number}`);
};

const anything = (...args) => {
	log(`Received anything:`);
	log(args);
};