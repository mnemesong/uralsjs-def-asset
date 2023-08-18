import * as templator from "uralsjs-templator"
import * as index from "../src"

const page = templator.tag.typecheck(
    [   'screen-color', 
        {},
        [   'padding-container', 
            {'class': "position-relative"},
            [   'very-white-panel', {
                    class: 'center-container mt-5 p-3',
                    style: 'width: 400px; height: min-content;'
                },
                [   'grid-gap-20',
                    {},
                    [   'h3',
                        {},
                        "Авторизация"
                    ],
                    [   'text-input'    ],
                    [   'date-input'    ],
                    [   'file-input'    ],
                    [   'image-input'   ],
                    [   'month-input'   ],
                    [   'search-input'  ],
                    [   'url-input'     ],
                    [   'submit-input'  ],
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