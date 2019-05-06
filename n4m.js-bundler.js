const maxApi = require("max-api");
const { exec } = require("child_process");
const { basename, dirname, extname, join } = require("path");
const { promisify } = require("util");

const execAsync = promisify(exec);

let isBusy = false;

maxApi.addHandler("build", async (filePath, outputPath) => {

	if (isBusy) {
		await maxApi.outlet("busy");
		return;
	}
	
	const ext = extname(filePath);
	if (!ext) {
		await maxApi.post(`Error while trying to build ${basename(filePath)}:`, maxApi.POST_LEVELS.ERROR);
		await maxApi.post("Provided File is not a JavaScript file.", maxApi.POST_LEVELS.ERROR);
		return;
	}

	if (!outputPath) {
		outputPath = join(dirname(filePath), `${basename(filePath, ext)}.build${ext}`);
	}

	const bin = join(__dirname, "node_modules", ".bin", "max-js-bundler");
	isBusy = true;
	await maxApi.outlet("start");

	try {
		await execAsync(`"${bin}" build "${filePath}" --output "${outputPath}" --force`);
	} catch (err) {
		await maxApi.post(`Error while trying to build ${basename(filePath)}:`, maxApi.POST_LEVELS.ERROR);
		await maxApi.post(err.message, maxApi.POST_LEVELS.ERROR);
		await maxApi.outlet("error");
		return;
	} finally {
		isBusy = false;
	}

	await maxApi.outlet("success", outputPath);
	await maxApi.outlet("dirpath", `file://${encodeURI(dirname(outputPath))}`);
});