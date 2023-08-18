import * as p from "path"

export const getBootstrap = () => p
    .resolve(module.path, "..", "..", "resources", "bootstrap.min.css")

export const getFonts = () => p
    .resolve(module.path, "..", "..", "resources", "fonts.css")

export const getMain = () => p
    .resolve(module.path, "..", "..", "resources", "main.css")

export const getNav = () => p
    .resolve(module.path, "..", "..", "resources", "nav.css")

export const getTable = () => p
    .resolve(module.path, "..", "..", "resources", "table.css")

export const getPath = () => p
    .resolve(module.path, "..", "..", "resources")