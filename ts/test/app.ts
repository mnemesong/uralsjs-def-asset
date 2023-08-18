import * as templator from "uralsjs-templator"
import * as index from "../src"

const page1 = templator.typecheck(
    [   'screen-color', 
        {},
        [   'padding-container', 
            {'class': "position-relative"},
            [   'div',
                {class: "d-grid w-100", style: "grid-template-columns: 1fr 400px 1fr"},
                '&nbsp;',
                [   'very-white-panel', 
                    {
                        class: 'mt-5 mb-5 w-100 p-3',
                        style: 'height: min-content;'
                    },
                    [   'grid-gap-20',
                        {},
                        [   'h3',
                            {},
                            "Авторизация"
                        ],
                        [ 'text-input' ],
                        [ 'date-input' ],
                        [ 'file-input' ],
                        [ 'image-input' ],
                        [ 'month-input' ],
                        [ 'search-input' ],
                        [ 'url-input' ],
                        [ 'submit-input' ],
                    ],
                ],
                '&nbsp;',
            ]
        ],
    ],
    index.tags.renderer
)

const page2 = templator.typecheck(
    [
        'screen-photo',
        {photo: './1.jpg'},
        [
            'padding-container',
            {},
            [
                'grid-gap-30',
                {style: "grid-template-columns: 1fr 1fr;"},
                [
                    'white-panel',
                    {},
                    'das98dnas89dn9as',
                    ['br'],
                    [
                        'btn-info',
                        {},
                        "Success"
                    ]
                ],
                [
                    'white-panel',
                    {},
                    'das98dnas89dn9as',
                    ['br'],
                    [
                        'btn-info',
                        {},
                        "Success"
                    ]
                ],
            ]
        ]
    ],
    index.tags.renderer
)

const render = () => {
    document.body.innerHTML = templator.render(['nav-top-panel'], index.tags.renderer)
        + templator.render(['nav-top-space'], index.tags.renderer)
        + templator.render(page1, index.tags.renderer)
        + templator.render(page2, index.tags.renderer)
}

render()