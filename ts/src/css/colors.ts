import * as path from "path"
import * as fs from "fs"

export const getPath = () => path
    .resolve(module.path, "..", "..", "..", "resources", "colors.css")

export const getContent = () => fs
    .readFileSync(getPath())