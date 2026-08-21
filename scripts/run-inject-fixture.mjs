import { injectIntoFile } from "../bin/taggie.js";

const [file, line] = process.argv.slice(2);
await injectIntoFile(file, line);
