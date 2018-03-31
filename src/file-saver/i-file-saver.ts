export interface IFileSaver {
	save (path: string, contents: string|Buffer): Promise<void>;
	saveSync (path: string, contents: string|Buffer): void;
	remove (path: string): Promise<void>;
	removeSync (path: string): void;
	makeDirectory (path: string): Promise<void>;
	makeDirectorySync (path: string): void;
}