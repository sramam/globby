import {fileURLToPath} from 'url';
import {Transform} from 'stream';

export const toPath = urlOrPath => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;

export class FilterStream extends Transform {
	constructor(filter) {
		super({
			objectMode: true,
			transform(data, encoding, callback) {
				callback(undefined, filter(data) ? data : undefined);
			},
		});
	}
}

export const isNegativePattern = pattern => pattern[0] === '!';
