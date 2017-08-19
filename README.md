# FileSaver
[![NPM version][npm-version-image]][npm-version-url]
[![License-mit][license-mit-image]][license-mit-url]

[license-mit-url]: https://opensource.org/licenses/MIT

[license-mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg

[npm-version-url]: https://www.npmjs.com/package/@wessberg/filesaver

[npm-version-image]: https://badge.fury.io/js/%40wessberg%2Ffilesaver.svg
> A Promise-based class that can save/remove files to/from disk and make folders recursively.

## Installation
Simply do: `npm install @wessberg/filesaver`.

## Usage
```typescript
const fileSaver = new FileSaver();

// Just a simple Promise-based async I/O method.
await fileSaver.save("some_file.ts", "hello world!");

// A recursive mkDir (like mkDir -f).
await fileSaver.makeDirectory("/foo/bar/baz");
```