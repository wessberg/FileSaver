# FileSaver [![NPM version][npm-image]][npm-url]
> A Promise-based class that can save/remove files to/from disk and make folders recursively.

## Installation
Simply do: `npm install @wessberg/filesaver`.

## DISCLAIMER

It is still very early days for this package. The API may change. Use with caution.

## Usage
```typescript
const fileSaver = new FileSaver();

// Just a simple Promise-based async I/O method.
await fileSaver.save("some_file.ts", "hello world!");

// A recursive mkDir (like mkDir -f).
await fileSaver.makeDirectory("/foo/bar/baz");
```

## Changelog:

**v1.0.1**:

- Added a disclaimer to the README.

**v1.0.0**:

- First release.

[npm-url]: https://npmjs.org/package/@wessberg/filesaver
[npm-image]: https://badge.fury.io/js/@wessberg/filesaver.svg