import * as fs from "fs"
import * as path from "path"

export const getFilePath = () => path
    .resolve(module.path, '..', '..', 'build', "main.js")

export const getScriptText = () => fs.readFileSync(getFilePath())