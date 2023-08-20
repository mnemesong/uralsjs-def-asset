export * as bootstrap from "./bootstrap"
export * as colors from "./colors"
export * as fonts from "./fonts"
export * as main from "./main"
export * as nav from "./nav"
export * as table from "./table"
export * as helper from "./helper"

import * as bootstrap from "./bootstrap"
import * as colors from "./colors"
import * as fonts from "./fonts"
import * as main from "./main"
import * as nav from "./nav"
import * as table from "./table"

export const getAllPaths = () => [
    bootstrap.getPath(),
    colors.getPath(),
    fonts.getPath(),
    main.getPath(),
    nav.getPath(),
    table.getPath(),
]