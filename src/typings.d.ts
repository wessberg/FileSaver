declare module "mkdirp" {
	interface Mkdirp {
		(path: string): Promise<string>;
		sync(path: string): string;
	}
	const mkdirp: Mkdirp;
	export default mkdirp;
}
