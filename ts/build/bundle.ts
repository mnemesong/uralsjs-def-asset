import * as templator from "uralsjs-templator"
import * as src from "../src"

const page1 = templator.render(
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
                        [ 'submit-input'],
                    ],
                ],
                '&nbsp;',
            ]
        ],
    ],
    src.tags.renderer
)

const page2 = templator.render(
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
                        {id: "create-alert-btn"},
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
    src.tags.renderer
)

const menu = templator.render([
        'nav-top-panel',
        {},
        [
            'nav-top-item',
            {class: "font-large"},
            [   
                'a',
                {href: "/url", class: "color-light"},
                'Brand'
            ]
        ]
    ], src.tags.renderer)
    + templator.render(['nav-top-space'], src.tags.renderer)

const render = () => {
    document.body.innerHTML = menu + page1 + page2
}

render()

document.getElementById('create-alert-btn').onclick = (event) => src
    .script.createAlert("Alert!")