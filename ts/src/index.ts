import * as fs from "fs"
import * as path from "path"

export * as tags from "./tags"
export * as css from "./css"
export * as def from "./def"
export * as htmlTemplate from "./html-template"
export * as dsl from "uralsjs-templator"

export const getScript = () => fs
    .readFileSync(path.resolve(module.path, "script.js"))