import * as t from "uralsjs-templator"

export const tag = 'overlayer-gallery'

export const renderer: t.dsl.abstracts.render.T<typeof tag> = {
    'overlayer-gallery': (params, content) => {
        return t.tag.render(
            [   'div', 
                {class: 'overlayer'},
                [   'div', {
                        onclick: "this.closest('.overlayer').remove()",
                        class: "overlayer-bg"
                    },
                ],
                [   'div',
                    {class: "gallery-container", "data-show": "0"},
                    [   'div',
                        {
                            class: "w-100 h-100",
                            onclick: "this.closest('.overlayer').remove()"
                        },
                        '&nbsp;'
                    ],
                    [   'div',
                        {
                            class: "gallery-elem gallery-close",
                            onclick: "this.closest('.overlayer').remove()"
                        },
                        '<ion-icon name="close-outline"></ion-icon>'
                    ],
                    content
                ],
            ], 
            t.def.renderer
        )
    }
}