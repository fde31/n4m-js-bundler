const { basename, dirname, extname, isAbsolute, join } = require("path");
const { run } = require("max-js-bundler");
const maxAPI = require("max-api");

maxAPI.addHandler("bundle", async (filepath) => {
	if (!filepath || !isAbsolute(filepath)) return maxAPI.post(`Cannot bundle file. ${filepath} is not an absolute path`, maxAPI.POST_LEVELS.ERROR);

	const fileext = extname(filepath);
	const outputPath = join(dirname(filepath), `${basename(filepath, fileext)}.build${fileext}`);

	try {
		await run(["build", filepath, "--output", outputPath, "-f"]);
	} catch (err) {
		await maxAPI.post(`Error while trying to bundle ${filepath}: ${err.message}`, maxAPI.POST_LEVELS.ERROR);
		await maxAPI.post("See the stdout of node.script for more info.");
	}
});
