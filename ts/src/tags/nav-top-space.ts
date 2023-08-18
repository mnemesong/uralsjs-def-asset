import * as t from "uralsjs-templator"

export const literal = 'nav-top-space'

export const renderer: t.config.T<typeof literal> = {
    'nav-top-space': (params, content) => {
        const cls = params.class
            ? "w-100 screen-dark " + params.class
            : "w-100 screen-dark"
        const stl = params.style
            ? "height: 50px; " + params.style
            : "height: 50px;"
        return t.render( [
            'div', 
            {...params, ...{class: cls, style: stl}},
            (content.length > 0) ? '&nbsp;' : content
        ], t.html.config)
    }
}