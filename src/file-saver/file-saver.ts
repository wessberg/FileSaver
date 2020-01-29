import {writeFile, writeFileSync} from "fs";
import {dirname} from "path";
import mkdirp from "mkdirp";
import rimraf from "rimraf";
import {IFileSaver} from "./i-file-saver";

/**
 * A Promise-based class that can save/remove files to/from disk and make folders recursively.
 */
export class FileSaver implements IFileSaver {
	/**
	 * Writes a file to disk synchronously. It will create the directories along the path if required
	 */
	saveSync(path: string, contents: string | Buffer): void {
		this.makeDirectorySync(dirname(path));
		writeFileSync(path, contents);
	}

	/**
	 * Removes a file from disk asynchronously
	 */
	async remove(path: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			rimraf(path, err => {
				if (err != null) reject(err);
				resolve();
			});
		});
	}

	/**
	 * Removes a file from disk synchronously
	 */
	removeSync(path: string): void {
		rimraf.sync(path);
	}

	/**
	 * Creates a directory on disk synchronously
	 */
	makeDirectorySync(path: string): string {
		return mkdirp.sync(path);
	}

	/**
	 * Writes a file to disk asynchronously. It will create the directories along the path if required
	 */
	async save(path: string, contents: string | Buffer): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			await this.makeDirectory(dirname(path));
			writeFile(path, contents, err => {
				if (err != null) reject(err);
				else resolve();
			});
		});
	}

	/**
	 * Creates a directory on disk asynchronously
	 */
	async makeDirectory(path: string): Promise<string> {
		return mkdirp(path);
	}
}
