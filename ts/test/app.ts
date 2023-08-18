import * as templator from "uralsjs-templator"
import * as index from "../src"

const page = templator.tag.typecheck(
    [   'screen-color', 
        {},
        'Hahaha'
    ],
    index.def.renderer
)

const render = () => {
    document.body.innerHTML = templator.tag.render(page, index.def.renderer)
}

render()