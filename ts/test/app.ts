import * as templator from "uralsjs-templator"
import * as index from "../src"

const page = templator.tag.typecheck(
    [   'screen-color', 
        {},
        [   'padding-container', 
            {'class': "position-relative"},
            [   'white-panel', {
                    class: 'center-container mt-6 p-3',
                    style: 'width: 400px; height: min-content;'
                },
                [   'h3',
                    {},
                    "Авторизация"
                ]
            ]
        ],
    ],
    index.def.renderer
)

const render = () => {
    document.body.innerHTML = templator.tag.render(page, index.def.renderer)
}

render()