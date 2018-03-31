import {unlink, unlinkSync, writeFile, writeFileSync} from "fs";
import {IFileSaver} from "./i-file-saver";
import * as mkdirp from "mkdirp";
import {dirname} from "path";

/**
 * A Promise-based class that can save/remove files to/from disk and make folders recursively.
 */
export class FileSaver implements IFileSaver {

	/**
	 * Writes a file to disk synchronously. It will create the directories along the path if required
	 * @param {string} path
	 * @param {string | Buffer} contents
	 */
	public saveSync (path: string, contents: string|Buffer): void {
		this.makeDirectorySync(dirname(path));
		writeFileSync(path, contents);
	}

	/**
	 * Removes a file from disk asynchronously
	 * @param {string} path
	 * @returns {Promise<void>}
	 */
	public async remove (path: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			unlink(path, err => {
				if (err != null) reject(err);
				resolve();
			});
		});
	}

	/**
	 * Removes a file from disk synchronously
	 * @param {string} path
	 */
	public removeSync (path: string): void {
		unlinkSync(path);
	}

	/**
	 * Creates a directory on disk synchronously
	 * @param {string} path
	 */
	public makeDirectorySync (path: string): void {
		mkdirp.sync(path);
	}

	/**
	 * Writes a file to disk asynchronously. It will create the directories along the path if required
	 * @param {string} path
	 * @param {string | Buffer} contents
	 * @returns {Promise<void>}
	 */
	public async save (path: string, contents: string|Buffer): Promise<void> {
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
	 * @param {string} path
	 * @returns {Promise<void>}
	 */
	public async makeDirectory (path: string): Promise<void> {

		return new Promise<void>((resolve, reject) => {
			mkdirp(path, (err: Error) => {
				if (err != null) reject(err);
				else resolve();
			});
		});
	}

}