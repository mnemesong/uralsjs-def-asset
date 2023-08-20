import * as path from "path"
import * as fs from "fs"

export const getPath = () => path
    .resolve(module.path, "..", "..", "..", "resources", "table.css")

export const getContent = () => fs
    .readFileSync(getPath())