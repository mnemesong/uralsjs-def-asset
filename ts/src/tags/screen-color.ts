import * as t from "uralsjs-templator"

export const literal = 'screen-color'

export const renderer: t.dsl.abstracts.render.T<typeof literal> = {
    'screen-color': (params, content) => {
        const cls = params.class 
            ? (params.class + ' screen dark-screen') 
            : 'screen dark-screen'
        const paramsText = t.dsl
            .abstracts
            .record
            .render({...params, ...{class: cls}})
        return `<div ${paramsText}>${content}</div>`
    }
}