import * as p from "path"

export const bootstrap = p
    .resolve(module.path, "..", "..", "resources", "bootstrap.min.css")

export const fonts = p
    .resolve(module.path, "..", "..", "resources", "fonts.css")

export const main = p
    .resolve(module.path, "..", "..", "resources", "main.css")

export const nav = p
    .resolve(module.path, "..", "..", "resources", "nav.css")

export const table = p
    .resolve(module.path, "..", "..", "resources", "table.css")

export const path = p
    .resolve(module.path, "..", "..", "resources")