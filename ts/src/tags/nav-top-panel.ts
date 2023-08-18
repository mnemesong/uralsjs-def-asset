import * as t from "uralsjs-templator"

export const literal = 'nav-top-panel'

export const renderer: t.config.T<typeof literal> = {
    'nav-top-panel': (params, content) => {
        const cls = params.class
            ? "w-100 position-fixed dark-screen padding-width " 
                + params.class
            : "w-100 position-fixed dark-screen padding-width"
        const stl = params.style
            ? "top: 0; height: 50px; " 
                + params.style
            : "top: 0; height: 50px;"
        return t.render( [
            'div', 
            {...params, ...{class: cls, style: stl}},
            (content.length > 0) ? '&nbsp;' : content
        ], t.html.config)
    }
}