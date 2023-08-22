import * as t from "uralsjs-templator"
import * as def from "../def"
import * as tag from "../tags"
import { dsl, tags } from ".."

export const dataAttrs = {
    dataCloseId: 'data-close-id'
}

export const printDsl = <M extends string>(
    id: string, 
    content: t.T<M>
): dsl.T<tag.T | M> => {
    return ['div', 
        {class: 'overlayer'},
        [   'div', {
                'data-close-id': id,
                class: "overlayer-bg",
            },
        ],
        [   'div',
            {class: "gallery-container", "data-show": "0"},
            [   'div',
                {
                    class: "w-100 h-100",
                    'data-close-id': id,
                },
                '&nbsp;'
            ],
            content
        ],
    ]
}

export const setOnclickCloseAction = (id: string, action: (e: MouseEvent) => void) => {
    Array.from(document.querySelectorAll(`[${dataAttrs.dataCloseId}='${id}']`))
        .forEach(el => {
            if(el instanceof HTMLElement) {
                el.onclick = action
            }
        })
}