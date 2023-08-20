import * as fs from "fs"
import * as path from "path"

export const getScriptText = () => fs
    .readFileSync(path.resolve(module.path, "script.js"))

export const getFilePath = () => path.resolve(module.path, "script.js")