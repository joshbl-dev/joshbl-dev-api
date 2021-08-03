import { access, appendFile, existsSync, readFile, writeFile } from "fs";

const cachePath = "./src/assets/cache.json";

access(cachePath, (err) => {
	if (err) {
		appendFile(cachePath, JSON.stringify({}), () => {});
	}
});

const beforeCacheAccess = async (cacheContext) => {
	return new Promise<void>(async (resolve, reject) => {
		if (existsSync(cachePath)) {
			readFile(cachePath, "utf-8", (err, data) => {
				if (err) {
					reject();
				} else {
					cacheContext.tokenCache.deserialize(data);
					resolve();
				}
			});
		} else {
			writeFile(cachePath, cacheContext.tokenCache.serialize(), (err) => {
				if (err) {
					reject();
				}
			});
		}
	});
};

const afterCacheAccess = async (cacheContext) => {
	if (cacheContext.cacheHasChanged) {
		await writeFile(
			cachePath,
			cacheContext.tokenCache.serialize(),
			(err) => {
				if (err) {
					console.log(err);
				}
			}
		);
	}
};

export const cachePlugin = {
	beforeCacheAccess,
	afterCacheAccess
};
