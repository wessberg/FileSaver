import {unlink, unlinkSync, writeFile, writeFileSync} from "fs";
import {IFileSaver} from "./Interface/IFileSaver";
import * as mkdirp from "mkdirp";

export class FileSaver implements IFileSaver {

	public saveSync (path: string, contents: string|Buffer): void {
		writeFileSync(path, contents);
	}

	public remove (path: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			unlink(path, err => {
				if (err) reject(err);
				resolve();
			});
		});
	}

	public removeSync (path: string): void {
		unlinkSync(path);
	}

	public makeDirectorySync (path: string): void {
		mkdirp.sync(path);
	}

	public save (path: string, contents: string|Buffer): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			writeFile(path, contents, err => {
				if (err) reject(err);
				else resolve();
			});
		});
	}

	public async makeDirectory (path: string): Promise<void> {

		return new Promise<void>((resolve, reject) => {
			mkdirp(path, (err: Error) => {
				if (err) reject(err);
				else resolve();
			});
		});
	}

}