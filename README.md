# FileSaver
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