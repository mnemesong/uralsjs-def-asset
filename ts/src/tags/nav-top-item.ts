import * as t from "uralsjs-templator"

export const literal = 'nav-top-item'

export const renderer: t.config.T<typeof literal> = {
    'nav-top-item': (params, content) => {
        const cls = params.class
            ? "d-table h-100 " + params.class
            : "d-table h-100"
        return t.render( [
            'div', 
            {...params, ...{class: cls}},
            [
                'div',
                {
                    class: "d-table-cell pe-2 ps-2 h-100", 
                    style: "vertical-align: middle;"
                },
                content
            ]
        ], t.html.config)
    }
}